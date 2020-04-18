const express = require('express')
const router = express.Router();
const db = require('../database/database.js')
const passport = require('../util/user_passport.js')
const Error = require('../util/error.js')
const bcrypt = require('bcrypt')

router.post('/login', passport.authenticate('local'), function(req,res,next){
    res.status(200).send({message: 'customer successfully logged in.'})
})
router.post('/signup', function(req,res,next){
    validate(req.body, function(err){
            //check validity of data sent
    console.log(err)
        if(err == null){
            bcrypt.hash(req.body.password, 10)
                .then(function(hash){
                db.query({
                sql:'INSERT INTO `user` VALUES (?,?,?);',
                values: [req.body.username, hash, req.body.phone_number]
                }, function(error, results, fields) {
                    if(error){
                        res.status(500).send({msg:'server error'})
                    }
                    else{
                        res.status(200).send({msg:'successfully signed up.'})
                    }
                })
            })
        }
        else{
            res.status(err.status).send({msg:err.message})
        }
    })
})

function validate(body, fn){
    if(!body.username || !body.password){
        fn(new Error(400, 'sign up credentials are empty'))
    }
    db.query({
        sql: 'SELECT `user_username`,`user_phone_number` FROM `user` WHERE `user_username` = ? or `user_phone_number` = ?', 
        values: [body.username, body.phone_number],
        timeout: 40000
    },function (error, results, fields) {
        if(error){
            fn(new Error(500, 'db error'));
        }
        else if(results.length !== 0){
            fn(new Error(400, 'Username or phone number already exists'));
        }
        else{
            fn();
        }
    })
}


module.exports = router