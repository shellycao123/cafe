# Documentation for connection to the server
## API list
### user APIs
1. /user/login POST: user login
* parameters: username, password
* success response: 200 {msg: 'customer successfully logged in.'}
* error response: 
  *  401 'Not authenticated.'
  *  500 {msg: 'There was something wrong with the server.'}
2.  /user/signup POST: user signup
* parameters: username , password, phone_number
* success: 200 {msg: 'customer successfully signed up.'}
* error: 
  * 400 {msg: specific reason to reject the input}
  * 500 {msg: 'There was something wrong with the server.'}
3. /user/addStars POST: add star to a user's total at a cafe
* prerequisite: user need to be logged in. 
* parameters: cafe_username, stars
* success: 
  * 200 {msg: 'transaction successfully added. '}
* error: 
  * 400 {msg:'insufficient information.'}
  * 400 {msg:'cafe name sent is incorrect. '}
  * 401 {msg:'User is not authenticated'}
  * 500 {msg:'There is an internal db error'}
4. /user/redeem POST: redeem the stars the user have at a restaurant
* prerequisite: user need to be logged in. 
* parameters: cafe_username, stars
* success: 
  * 200 {msg: 'star successfully redeemed. '}
* error: 
  * 400 {msg:'insufficient information.'}
  * 400 {msg:'cafe name sent is incorrect. '}
  * 400 {msg:'Insufficient amount'}
  * 401 {msg:'User is not authenticated'}
  * 500 {msg:'There is an internal db error'}
5. /user/history/stars/{cafe} GET: get a user's hisotry of adding star and redeeming star at a restaurant. 
* prerequisite: user need to be logged in. 
* parameter: replace the {cafe} in the url with the name of the cafe 
* success:
  * 200 {results: an array of star_trans object}
* error: 
  * 400 {msg:'cafe doesn't exist.'}
  * 400 {msg:'cafe name is missing in the parameter list'}
  * 401 {msg:'User is not authenticated'}
  * 500 {msg:'There is an internal db error'}
1. /user/history/trans/{cafe} GET: get a user's payment history at a cafe
 * prerequisite: user need to be logged in. 
 * parameter: replace the {cafe} in the url with the name of the cafe 
 * success:
  * 200 {results: an array of trans object}
* error: 
  * 400 {msg:'cafe doesn't exist.'}
  * 400 {msg:'cafe name is missing in the parameter list'}
  * 401 {msg:'User is not authenticated'}
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
| total          | int(10)     | YES  |     | NULL    |       |