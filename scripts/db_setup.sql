CREATE DATABASE cafe_db;
USE DATABASE cafe_db;
CREATE TABLE user(
    username varchar(50),
    password binary(60),
    phone_number INT(20)  PRIMARY KEY
);
CREATE TABLE cafe(
    name varchar(50),
    location geometry,
    policy varchar(30),
    menu varchar(30) 
);
CREATE TABLE transaction(
    price double(8,5),
    timestamp time,
    phone_number INT(20) references user(phone_number),
    cafe INT references cafe(id),
    primary key(phone_number, cafe)
);
CREATE TABLE user_cafe(
    phone_number INT(20) references user(phone_number),
    cafe INT references cafe(id) ,
    star int(10),
    primary key(phone_number, cafe)
);