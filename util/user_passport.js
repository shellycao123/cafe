var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const db = require('../database/database.js')
const bcrypt = require('bcrypt')

//regular authentication
passport.use(new LocalStrategy(
    function(username, password, done) {
        //find the user in the db
        db.query({
            sql: 'SELECT * FROM `user` WHERE `user_username` = ?', 
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
           // return done(null, results[0])
            return bcrypt.compare(password, results[0].user_password.toString()).then(function(result, error){
                if(error){
                    return done(error)
                }
                if(result == true){
                    console.log('success')
                    return done(null,results[0])
                }
                console.log('wrong credential')
                return done(null, false, {message: 'Incorrect password.'})
            }) 
            
        }
        )
    }
))
passport.serializeUser(function(user,done){
    done(null, user.user_phone_number)
})
passport.deserializeUser(function(id, done) {
    db.query({
        sql:'SELECT * FROM `user` WHERE user_phone_number=?',
        values:[id]
    }, function(err, user) {
      done(err, user);
    });
  });

//OAuth signin



//callback for db lookup result
module.exports = passport