const express = require('express')
const router = express.Router();
const db = require('../database/database.js')
const passport = require('../util/passport.js')
const Error = require('../util/error.js')
const bcrypt = require('bcrypt')

router.post('/login', passport.authenticate('local-user'), function(req,res,next){
    res.status(200).json({message: 'customer successfully logged in.'})
})
router.post('/signup', function(req,res,next){
    validate(req.body, function(err){
        if(err == null){
            bcrypt.hash(req.body.password, 10)
                .then(function(hash){
                db.query({
                sql:'INSERT INTO `user` VALUES (?,?);',
                values: [req.body.username, hash]
                }, function(error, results, fields) {
                    if(error){
                        res.status(500).json({msg:'server error'})
                    }
                    else{
                        res.status(200).json({msg:'successfully signed up.'})
                    }
                })
            })
        }
        else{
            res.status(err.status).json({msg:err.message})
        }
    })
})
router.post('/addStar', loggedIn, function(req,res,next){   
    let values = []
    if(!req.body.cafe_username){
        res.status(400).json({msg:'insufficient information.'})
        return
    }
    let stars = 0.0;
    if(req.body.stars != null){
        stars = req.body.stars
    }
    values.push(stars)
    values.push(req.user.user_username)
    hasCafe(req.body.cafe_username, db, function(exists){
        if(exists){
            values.push(req.body.cafe_username)
            //add to transaction list
            db.beginTransaction(function(err) {
                if (err){
                    return db.rollback(()=>{
                        console.log('error when starting the transaction')
                        res.status(500).json({msg:'internal db error. '})
                    })
                }
                else{
                    db.query({
                        sql:'INSERT INTO `star_trans`(`stars`,`user_username`,`cafe_username`) VALUES (?, ?, ?)',
                        values,
                        timeout:40000
                    }, function(error, results, fields){
                        if(error){
                            return db.rollback(()=>{
                                console.log(' error when insert transaction value')
                                res.status(500).json({msg:'internal db error. '})
                            })
                        }
                        else{
                             //add to total point list
                            db.query({
                                sql:'UPDATE `user_cafe` SET `total` = `total` + ? WHERE `user_username`= ? AND `cafe_username` = ?',
                                values: [stars, req.user.user_username, req.body.cafe_username]
                            },function(error, results, fields){
                                if(error){
                                    console.log(error)
                                    return db.rollback(()=>{
                                        console.log('error when updating user_cafe')
                                        res.status(500).json({msg:'internal db error. '})
                                    })
                                }
                                else if(!results || results.affectedRows != 1){
                                    db.query({
                                        sql:'INSERT INTO `user_cafe` VALUES (?,?,?)',
                                        values: [req.user.user_username, req.body.cafe_username, stars]
                                    },function(error, results){
                                        if(error){
                                            return db.rollback(()=>{
                                                console.log('error when insert into user_cafe')
                                                res.status(500).json({msg:'internal db error. '})
                                            })
                                        }
                                        else{
                                            db.commit(function(err) {
                                                if (err) {
                                                  return connection.rollback(function() {
                                                    console.log(error)
                                                    res.status(500).json({msg:'internal db error. '})
                                                  });
                                                }
                                                else{
                                                    res.status(200).json({msg: 'transaction added successfully'})
                                                }
                                            })
                                        }
                                    })
                                }
                                else{
                                    res.status(200).json({msg: 'transaction added successfully'})
                                }
                        })
                        }
                    })  
                }
            })
        }
        else{
            res.status(400).json({msg:'cafe name sent is incorrect. '})
        }


    })
})
router.post('/redeem', loggedIn, function(req,res,next){
    if(!req.body.cafe_username || !req.body.stars){
        res.status(400).json({msg:'insufficient information.'})
        return
    }
    hasCafe(req.body.cafe_username, db, (exists)=>{
        if(exists){
            db.beginTransaction((error)=>{
                if(error){
                    console.log('error beginning transaction.')
                    return db.rollback(()=>{res.status(500).json({msg:'internal db error.'})})
                }
                db.query({
                    sql:'INSERT INTO `star_trans` (`cafe_username`, `user_username`, `stars`) VALUES(?, ?, ?)',
                    values: [req.body.cafe_username, req.user.user_username, 0-req.body.stars]
                },function(error, results){
                    if(error){
                        console.log('error inserting trans.')
                        return db.rollback(()=>{res.status(500).json({msg:'internal db error.'})})
                    }
                    db.query({
                        sql:'UPDATE `user_cafe` SET `total` = `total` - ? WHERE `user_username` = ? AND `cafe_username` = ? AND `total` >= ?',
                        values: [req.body.stars, req.user.user_username, req.body.cafe_username, req.body.stars]
                    }, (error, results)=>{
                        if(error){
                            console.log('error update user_cafe.')
                            return db.rollback(()=>{res.status(500).json({msg:'internal db error.'})})
                        }
                        if(results.affectedRows == 0){
                            console.log('insufficient amount')
                            return db.rollback(()=>{res.status(400).json({msg:'Insufficient amount'})})
                        }
                        db.commit((error)=>{
                            if(error){
                                console.log('error commiting.')
                                return db.rollback(()=>{res.status(500).json({msg:'internal db error.'})})
                            }
                            res.status(200).json({msg: 'star successfully redeemed.'})
                        })
                    })
                })
            })
        }
        else{
            res.status(400).json({msg:'cafe name sent is incorrect. '})
        }
    })

})
router.get('/history/trans/:cafe', loggedIn, function(req,res,next){
    if(!req.params.cafe){
        res.status(400).json({msg:'cafe name is missing in the parameter list'})
        return
    }
    hasCafe(req.params.cafe,db, function(exists){
        if(!exists){
            res.status(400).json({msg:'cafe doesn\'t exist.'})
            return
        }
        db.query('SELECT * FROM `trans` WHERE `cafe_username` = ? AND `user_username` = ?', [req.params.cafe,req.user.user_username], function(error, results){
            if(error){
                console.log(error)
                res.status(500).json({msg:'There is an internal db error'})
            }
            else{
                res.status(200).json({results})
            }
        })
    })

})
router.get('/history/stars/:cafe', loggedIn, function(req,res,next){
    if(!req.params.cafe){
        res.status(400).json({msg:'cafe name is missing in the parameter list'})
        return
    }
    hasCafe(req.params.cafe,db, function(exists){
        if(!exists){
            res.status(400).json({msg:'cafe doesn\'t exist.'})
            return
        }
        db.query('SELECT * FROM `star_trans` WHERE `cafe_username` = ? AND `user_username` = ?', [req.params.cafe,req.user.user_username], function(error, results){
            if(error){
                console.log(error)
                res.status(500).json({msg:'There is an internal db error'})
            }
            else{
                res.status(200).json({results})
            }
        })
    })

})
router.get('/:cafe/total', loggedIn, function(req,res,next){
    hasCafe(req.params.cafe, db, (exists)=>{
        if(!exists){
            res.status(400).json({msg:'cafe doesn\'t exist.'})
            return
        }
        db.query('SELECT `total` FROM `user_cafe` WHERE `user_username` = ? AND `cafe_username` = ?',
         [req.user.user_username,req.params.cafe], function(error, results){
             if(error){
                 console.log(error)
                 res.status(500).json({msg:'There is an internal db error'})
             }
             else if(results.length == 0){
                res.status(400).json({msg:'User doesn\'t have any star history in the cafe'})
             }
             else{
                 res.status(200).json(results[0])
             }
         } )
    })
})
router.get('/getAllCafe', loggedIn, function(req,res,next){
    let sql = 'SELECT cafe_username, total, cafe_name, cafe_location, cafe_policy, cafe_menu FROM user_cafe NATURAL JOIN cafe where user_username = ? '
    db.query(sql, req.user.user_username, function(error, results){
        if(error){
            console.log(error)
            res.status(500).json({msg: 'There is an internal db error'})
        }
        else{
            res.status(200).json(results)
        }
    })
})


function validate(body, fn){
    if(!body.username || !body.password){
        fn(new Error(400, 'sign up credentials are empty'))
    }
    db.query({
        sql: 'SELECT `user_username` FROM `user` WHERE `user_username` = ? ', 
        values: [body.username],
        timeout: 40000
    },function (error, results, fields) {
        if(error){
            fn(new Error(500, 'db error'));
        }
        else if(results.length !== 0){
            fn(new Error(400, 'Username already exists'));
        }
        else{
            fn();
        }
    })
}

function loggedIn(req, res, next){
    if(!req.user || !req.user.user_username){
        res.status(401).json({msg:'User is not authenticated'})
    }
    else{
        return next();
    }
}

function hasCafe(cafe_username,db, fn){
    db.query({
        sql:'SELECT * FROM `cafe` WHERE `cafe_username`=?',
        values:[cafe_username]
        },function(error,result){
            if(error || result.length != 1){
                fn(false)
            }
            else{
                fn(true);
            }
        }
    )
}

module.exports = router