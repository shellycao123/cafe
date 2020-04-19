# Documentation for connection to the server
## API list
1. /user/login POST
* parameters: username, password
* success response: 200 {message: 'customer successfully logged in.'}
* error response: 
  *  401 when credential is wrong
  *  500 {err: 'There was something wrong with the server.'}
2.  /user/signup POST
* parameters: username , password, phone_number
* success: 200 {msg: 'customer successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
3.  /cafe/signup POST
* parameters: username , password
* success: 200 {msg: 'cafe successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
4. /cafe/login POST
* parameters: username, password
* success response: 200 {msg: 'cafe successfully logged in.'}
* error response: 
  *  401 {err: 'Log in credential is not valid.'}
  *  500 {err: 'There was something wrong with the server.'}
5. 

## DB layout 
### user
| Field             | Type        | Null | Key | Default | Extra |
|-------------------|-------------|------|-----|---------|-------|
| user_username     | varchar(50) | YES  |     | NULL    |       |
| user_password     | binary(60)  | YES  |     | NULL    |       |
| user_phone_number | int(20)     | NO   | PRI | NULL    |       |
### trans(transaction)
| Field             | Type        | Null | Key | Default | Extra |
|-------------------|-------------|------|-----|---------|-------|
| trans_price       | double(8,5) | YES  |     | NULL    |       |
| trans_timestamp   | time        | YES  |     | NULL    |       |
| user_phone_number | int(20)     | NO   | PRI | NULL    |       |
| cafe_id           | int(11)     | NO   | PRI | NULL    |       |
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
| Field             | Type    | Null | Key | Default | Extra |
|-------------------|---------|------|-----|---------|-------|
| user_phone_number | int(20) | NO   | PRI | NULL    |       |
| cafe_id           | int(11) | NO   | PRI | NULL    |       |
| star              | int(10) | YES  |     | NULL    |       |

