# Documentation for connection to the server
## API list
### user APIs
1. /user/login POST
* parameters: username, password
* success response: 200 {msg: 'customer successfully logged in.'}
* error response: 
  *  401 'Not authenticated.'
  *  500 {msg: 'There was something wrong with the server.'}
2.  /user/signup POST
* parameters: username , password, phone_number
* success: 200 {msg: 'customer successfully signed up.'}
* error: 
  * 400 {msg: specific reason to reject the input}
  * 500 {msg: 'There was something wrong with the server.'}
3. /user/addStars POST
* prerequisite: user need to be logged in. 
* parameters: cafe_username, price
* success: 200 {msg: 'transaction successfully added. '}
* error: 
  * 400 {msg:'insufficient information.'}
  * 400 {msg:'cafe name sent is incorrect. '}
  * 500 {msg:'There is an internal db error'}
### cafe APIs
1.  /cafe/signup POST
* parameters: username , password, name
* success: 200 {msg: 'cafe successfully signed up.'}
* error: 
  * 400 {msg: specific reason to reject the input}
  * 500 {msg: 'There was something wrong with the server.'}
4. /cafe/login POST
* parameters: username, password
* success response: 200 {msg: 'cafe successfully logged in.'}
* error response: 
  *  401 'Not authenticated. '
  *  500 {msg: 'There was something wrong with the server.'}
5. 

## DB layout 
### user
| Field             | Type        | Null | Key | Default | Extra |
|-------------------|-------------|------|-----|---------|-------|
| user_username     | varchar(50) | YES  |     | NULL    |       |
| user_password     | binary(60)  | YES  |     | NULL    |       |
| user_phone_number | int(20)     | NO   | PRI | NULL    |       |
### trans(transaction)
| Field           | Type        | Null | Key | Default | Extra |
|-----------------|-------------|------|-----|---------|-------|
| trans_price     | double(8,5) | YES  |     | NULL    |       |
| trans_timestamp | time        | NO   | PRI | NULL    |       |
| user_username   | varchar(50) | NO   | PRI | NULL    |       |
| cafe_username   | varchar(50) | NO   | PRI | NULL    |       |
### cafe
| Field         | Type        | Null | Key | Default | Extra |
|---------------|-------------|------|-----|---------|-------|
| cafe_name     | varchar(50) | YES  |     | NULL    |       |
| cafe_location | geometry    | YES  |     | NULL    |       |
| cafe_policy   | blob        | YES  |     | NULL    |       |
| cafe_menu     | blob        | YES  |     | NULL    |       |
| cafe_username | varchar(50) | NO   | PRI | NULL    |       |
| cafe_password | binary(60)  | YES  |     | NULL    |       |
### user_cafe
| Field         | Type        | Null | Key | Default | Extra |
|---------------|-------------|------|-----|---------|-------|
| user_username | varchar(50) | NO   | PRI | NULL    |       |
| cafe_username | varchar(50) | NO   | PRI | NULL    |       |
| star          | int(10)     | YES  |     | NULL    |       |