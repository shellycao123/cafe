import {Alert} from 'react-native';

function handleSignUp(email, phone, password, url) {

    fetch(url, {
        method: "POST",
        headers: {
          Accept:'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password: password
        }),
    })
    .then((res) => {
      if(res.ok){
        return Alert.alert(
            "Sucess!",
            "You've sign up",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      } else{

        Alert.alert(
            "Error!",
            "Username already exists!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      }
    })
}

function handleSignIn(email, password, url){
  fetch(url, {
      method: "POST",
      headers: {
        Accept:'applicantion/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: email,
          password: password
      }),
  })
  .then((response) => {
    console.log('Success:'+response.status, response.url);
  })
  .catch((error) => {
    console.error('Error:'+error.status, error.url);
  });
}

export {handleSignUp, handleSignIn};