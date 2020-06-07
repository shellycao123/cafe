import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// !!! Current implementation: stars equals amount, backend should change accepted params 'stars' to 'amount' and get amount-to-stars strategy for each cafe
function addStar(url, cafeName, amount){
  fetch(url, {
    method: "POST",
    headers: {
      Accept:'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        cafe_username: cafeName,
        stars: amount
    }),
  })
  .then((res) => {
    if(res.ok){
      return Alert.alert(
          "Sucess!",
          "You've added stars",
          { cancelable: false }
        );
    } else{
      Alert.alert(
          "Error!",
          "Error occuered in backend!",
          { cancelable: false }
        );
    }
  })
}

function handleSignUp(email, phone, password, url, navigation, goToPage) {

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
            { text: "OK", onPress: () => navigation.navigate(goToPage) }
          ],
          { cancelable: false }
        );
    } else{

      Alert.alert(
          "Error!",
          "Username already exists!",
          [
            { text: "OK", onPress: () => console.log(res) }
          ],
          { cancelable: false }
        );
    }
  })
}
function handleSignIn(email, password, url, navigation, goToPage){
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
.then((response) => {
  console.log('Success:'+response.status, response.url);
  return Alert.alert(
    "Sucess!",
    "You've sign in",
    [
      { text: "OK", onPress: () => navigation.navigate(goToPage) }
    ],
    { cancelable: false }
  );
})
.catch((error) => {
  console.error('Error:'+error.status, error.url);
});
}

export {handleSignUp, handleSignIn, addStar};
