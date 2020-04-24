var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const db = require('../database/database.js')
const bcrypt = require('bcrypt')

//cafe authentication
passport.use('local-cafe',new LocalStrategy(
    function(username, password, done) {
        //find the user in the db
        db.query({
            sql: 'SELECT * FROM `cafe` WHERE `cafe_username` = ?', 
            values: [username],
            timeout: 40000
        }, function (error, results, fields) {
            if(error){
                return done(error)
            }
            if(results.length !== 1){
                console.log('wrong cafe username')
                return done(null, false, {message: 'Incorrect username.'})
            }
           // return done(null, results[0])
            return bcrypt.compare(password, results[0].cafe_password.toString()).then(function(result, error){
                if(error){
                    return done(error)
                }
                if(result == true){
                    return done(null,results[0])
                }
                console.log('wrong cafe password')
                return done(null, false, {message: 'Incorrect password.'})
            }) 
            
        }
        )
    }
))

//user authentication
passport.use('local-user',new LocalStrategy(
    function(username, password, done) {
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
            return bcrypt.compare(password, results[0].user_password.toString()).then(function(result, error){
                if(error){
                    return done(error)
                }
                if(result == true){
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
     if(user.hasOwnProperty('cafe_username')){
        done(null, {id: user.cafe_username, type:'cafe'})
     }
     else{
        done(null, {id:user.user_username,type:'user'})
     }
})
passport.deserializeUser(function(session, done) {
    if(session.type === 'cafe'){
        db.query({
            sql:'SELECT * FROM `cafe` WHERE cafe_username= ?',
            values:[session.id]
        }, function(err, cafe) {
          done(err, cafe[0]);
        });
    }
    else{
        db.query({
            sql:'SELECT user_username FROM `user` WHERE user_username=?',
            values:[session.id]
        }, function(err, user) {
          done(err, user[0]);
        });
    }
    
  });

//OAuth signin



//callback for db lookup result
module.exports = passport