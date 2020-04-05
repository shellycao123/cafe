const express = require('express')
const router = express.Router();
const db = require('../database/database.js')

router.post('/login', function(req,res,next){
    req.body.username
})
router.post('/signup', function(req,res,next){
    
})




module.exports = router