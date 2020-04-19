CREATE DATABASE cafe_db;
USE cafe_db;
CREATE TABLE user(
    user_username varchar(50) PRIMARY KEY,
    user_password binary(60)
);
CREATE TABLE cafe(
    cafe_name varchar(50),
    cafe_location geometry,
    cafe_policy blob,
    cafe_menu blob,
    cafe_username varchar(50)  PRIMARY KEY,
    cafe_password binary(60)
);
CREATE TABLE trans(
    trans_price double(8,5),
    trans_timestamp time,
    user_username INT(20) references user(user_username),
    cafe_username INT references cafe(cafe_username),
    primary key(user_username, cafe_username)
);
CREATE TABLE user_cafe(
    user_username INT(20) references user(user_username),
    cafe_username INT references cafe(cafe_username) ,
    star int(10),
    primary key(user_username, cafe_username)
);