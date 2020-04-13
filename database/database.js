//implementation is currently based on single db usage.
//TO-DO: use mysql db connection pool to allow load balancing & multi-db usage
const mysql = require('mysql')

//setting up database 
const connection = mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
database : 'cafe_db'
})
connection.connect(function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log('database connection success.')
});

module.exports = connection