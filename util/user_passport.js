var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const db = require('../database/database.js')
const bcrypt = require('bcrypt')

//regular authentication
passport.use(new LocalStrategy(
    function(username, password, done) {
        //find the user in the db
        db.query({
            sql: 'SELECT `user_username`,`user_phone_number` FROM `user` WHERE `user_username` = ?', 
            values: [username],
            timeout: 40000
        }, function (error, results, fields) {
            if(error){
                console.log("authentication username lookup server error.")
                return done(error)
            }
            if(results.length !== 1){
                return done(null, false, {message: 'Incorrect username.'})
            }
            return bcrypt.compare(password, results[0].user_password).then(function(result){
                if(result == true){
                    return done(null, result[0])
                }
                return done(null, false, {message: 'Incorrect password.'})
            })
            
        }
        )
    }
))



//OAuth signin



//callback for db lookup result
module.exports = passport