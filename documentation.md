1. /login GET
* parameters: username, pw(password)
* success response: 200 {msg: 'successfully logged in.'}
* error response: 
  *  401 {err: 'Log in credential is not valid.'}
  *  500 {err: 'There was something wrong with the server.'}
2.  /signup/customer POST
*  parameters: username , pw(password)
* success: 200 {msg: 'successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
3.  /signup/cafe POST
*  parameters: username , pw(password)
* success: 200 {msg: 'successfully signed up.'}
* error: 
  * 400 {error: specific reason to reject the input}
  * 500 {err: 'There was something wrong with the server.'}
