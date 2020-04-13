# Documentation for connection to the server
## API list
1. /user/login GET
* parameters: username, password
* success response: 200 {message: 'customer successfully logged in.'}
* error response: 
  *  401 {message: error message for the log in. }
  *  500 {err: 'There was something wrong with the server.'}
1.  /user/signup POST
* parameters: username , pw(password)
* success: 200 {msg: 'customer successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
3.  /cafe/signup POST
* parameters: username , pw(password)
* success: 200 {msg: 'cafe successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
4. /cafe/login GET
* parameters: username, password
* success response: 200 {msg: 'cafe successfully logged in.'}
* error response: 
  *  401 {err: 'Log in credential is not valid.'}
  *  500 {err: 'There was something wrong with the server.'}

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
| Field             | Type        | Null | Key | Default | Extra |
|-------------------|:------------|:-----|:----|:--------|:------|
| trans_price       | double(8,5) | YES  |     | NULL    |       |
| trans_timestamp   | time        | YES  |     | NULL    |       |
| user_phone_number | int(20)     | NO   | PRI | NULL    |       |
| cafe_id           | int(11)     | NO   | PRI | NULL    |       |
### user_cafe
| Field             | Type    | Null | Key | Default | Extra |
|-------------------|---------|------|-----|---------|-------|
| user_phone_number | int(20) | NO   | PRI | NULL    |       |
| cafe_id           | int(11) | NO   | PRI | NULL    |       |
| star              | int(10) | YES  |     | NULL    |       |

