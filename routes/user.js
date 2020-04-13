const express = require('express')
const router = express.Router();
const db = require('../database/database.js')
const passport = require('../util/user_passport.js')


router.get('/signup', passport.authenticate('local'), function(req,res,next){
    res.status(200),send({message: 'customer successfully logged in.'})
})
router.get('/login', function(req,res,next){
    
})


module.exports = router