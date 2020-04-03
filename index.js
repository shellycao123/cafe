//setting up packages
const express = require('express')
const app = express()
const mysql = require('mysql')
const session = require('express-session')
const dotenv = require('dotenv').config()
const cors = require('cors')

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



//setting up server
if(process.env.NODE_ENV == 'development'){
    app.listen(5000)
}
app.listen()
//close all connections 
connection.end()