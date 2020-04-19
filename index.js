//setting up packages
const express = require('express')
const app = express()
const session = require('express-session')
const dotenv = require('dotenv').config()
const cors = require('cors')
const passport = require('passport')

//setting up session
//set up middleware
app.use(express.json())
app.use(express.static('public',  {maxAge: '1d'}))
app.use(express.urlencoded({extended: false} ))
const corsOptions = {
    origin: process.env.FRONTEND_ADDRESS,
    methods: 'GET,POST'
}
app.use(cors(corsOptions))
app.use(session({ secret: process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session());

//setting up server and router
app.use('/user', require('./routes/user'))
app.use('/cafe', require('./routes/cafe'))
//resouce not found handling
app.use(function(req,res,next){
    res.status(404).send({msg: 'requested resource not found.'})
})


//setting up server
app.listen(process.env.PORT)