CREATE DATABASE cafe_db;
USE cafe_db;
CREATE TABLE user(
    user_username varchar(50) PRIMARY KEY,
    user_password binary(60)
);
CREATE TABLE cafe(
    cafe_name varchar(50),
    cafe_location geometry,
    cafe_policy double(5,3) DEFAULT null,
    cafe_menu blob,
    cafe_username varchar(50)  PRIMARY KEY,
    cafe_password binary(60)
);
CREATE TABLE trans(
    trans_price double(8,5),
    user_username varchar(50) references user(user_username),
    cafe_username varchar(50) references cafe(cafe_username),
    trans_timestamp timestamp DEFAULT CURRENT_TIMESTAMP,
    primary key(user_username, cafe_username, trans_timestamp)
);
CREATE TABLE user_cafe(
    user_username varchar(50) references user(user_username),
    cafe_username varchar(50) references cafe(cafe_username),
    total double(15, 5),
    PRIMARY KEY(cafe_username, user_username)
);
CREATE TABLE 
