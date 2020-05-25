const express = require('express')
const router = express.Router();
const db = require('../database/database.js')
const passport = require('../util/passport.js')
const Error = require('../util/error.js')
const bcrypt = require('bcrypt')

router.post('/login', passport.authenticate('local-cafe'), function(req,res,next){
    res.status(200).json({message: 'cafe successfully logged in.'})
})
router.post('/signup', function(req,res,next){
    validate(req.body, function(err){
        if(err == null){
            bcrypt.hash(req.body.password, 10)
                .then(function(hash){
                db.query({
                sql:'INSERT INTO `cafe` (`cafe_username`, `cafe_password`,`cafe_name`) VALUES (?,?,?);',
                values: [req.body.username, hash,req.body.name]
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
router.post('/addMenu', function(){
    
})
router.post('/addPolicy',function(){

})
router.get('/getAllStars', loggedIn, function(req,res,next){
 let sql = 'SELECT user_username, total From user_cafe natural join user where cafe_username = ?'
 db.query(sql, req.user.cafe_username, function(error, results){
     if(error){
         console.log(error)
     }
     res.status(200).json(results)
 })
})
router.get('/getInfo/:cafe', function(req,res,next){
    let sql = 'select * from cafe where cafe_username = ? '
    db.query()
})

function validate(body, fn){
    if(!body.username || !body.password){
        fn(new Error(400, 'sign up credentials are empty'))
    }
    db.query({
        sql: 'SELECT `cafe_username` FROM `cafe` WHERE `cafe_username` = ?;', 
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
function loggedIn(req,res,next){
    if(!req.user || !req.user.cafe_username){
        res.status(401).json({msg:'Cafe is not authenticated'})
    }
    next()
}


module.exports = router