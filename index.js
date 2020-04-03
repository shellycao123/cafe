//setting up packages
const express = require('express')
const app = express()
const mysql = require('mysql')
const session = require('express-session')
const dotenv = require('dotenv').config()
const cors = require('cors')


//setting up database 
const connection = mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})
connection.connect(function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log('database connection success.')
});

//setting up session
//set up middleware
app.use(express.json())
app.use(express.static('public',  {maxAge: '1d'}))
app.use(express.urlencoded())
const corsOptions = {
    origin: process.env.FRONTEND_ADDRESS,
    methods: 'GET,POST'
}
app.use(cors(corsOptions))

//setting up server and router
app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))
app.use(function(req,res,next){
    res.status(404).send({msg: 'requested resource not found.'})
})


//setting up server
app.listen(process.env.PORT)
//close all connections 
connection.end()