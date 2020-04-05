CREATE DATABASE cafe_db;
USE cafe_db;
CREATE TABLE user(
    user_username varchar(50),
    user_password binary(60),
    user_phone_number INT(20)  PRIMARY KEY
);
CREATE TABLE cafe(
    cafe_name varchar(50),
    cafe_location geometry,
    cafe_policy blob,
    cafe_menu blob 
);
CREATE TABLE trans(
    trans_price double(8,5),
    trans_timestamp time,
    user_phone_number INT(20) references user(phone_number),
    cafe_id INT references cafe(id),
    primary key(user_phone_number, cafe_id)
);
CREATE TABLE user_cafe(
    user_phone_number INT(20) references user(phone_number),
    cafe_id INT references cafe(id) ,
    star int(10),
    primary key(user_phone_number, cafe_id)
);