# Documentation for connection to the server
## API list
1. /user/login GET
* parameters: username, pw(password)
* success response: 200 {msg: 'customer successfully logged in.'}
* error response: 
  *  401 {err: 'Log in credential is not valid.'}
  *  500 {err: 'There was something wrong with the server.'}
2.  /user/signup POST
*  parameters: username , pw(password)
* success: 200 {msg: 'customer successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
3.  /cafe/signup POST
*  parameters: username , pw(password)
* success: 200 {msg: 'cafe successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
4. /cafe/login GET
* parameters: username, pw(password)
* success response: 200 {msg: 'cafe successfully logged in.'}
* error response: 
  *  401 {err: 'Log in credential is not valid.'}
  *  500 {err: 'There was something wrong with the server.'}
