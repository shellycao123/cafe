import React, { Component, useState } from 'react';
import { View, Text, Button, Linking, TextInput, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView, Keyboard, Alert, StyleSheet, Picker, Image} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalInfo from "./components/Screen.js"
import MyKeyboard from "./components/Keyboard.js"
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'semantic-ui-react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import styles from './style'
import {handleSignUp, handleSignIn} from './handleRequest.js'
const URL="https://localhost:3000"


function WelcomePage({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, margin:30, alignItems:'center'}}>
    <ScrollView>
      <Text style={[styles.h1, styles.centerText, styles.largeMargin]}>Welcome!</Text>
      <TouchableOpacity
          style={[styles.button, styles.mediumMargin]}
          onPress={()=>navigation.navigate("SignUp")}
      >
          <Text style={[styles.h3, styles.centerText]}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={[styles.button, styles.mediumMargin]}
          onPress={()=>navigation.navigate("SignIn")}
      >
          <Text style={[styles.h3, styles.centerText]}>Sign In</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
          style={[styles.button, styles.mediumMargin]}
          onPress={()=>navigation.navigate("Amount")}
      >
          <Text style={[styles.h3, styles.centerText]}>Amount Page</Text>
      </TouchableOpacity> */}
    </ScrollView>
    </SafeAreaView>
  );
}

//
function SignUpPage({navigation}) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const url = URL+'/user/signup';
  return (
      <SafeAreaView style={{flex: 1, margin:30}}>
      <ScrollView>
          <Text style={[styles.h2, styles.smallMargin]}>Email</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setEmail(text)}
          />

          <Text style={[styles.h2, styles.smallMargin]}>Phone</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setPhone(text)}
          />

          <Text style={[styles.h2, styles.smallMargin]}>Password</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="go"
              enablesReturnKeyAutomatically={true}
              onSubmitEditing={()=>handleSignUp(email, phone, password, url, navigation, "Home")}
          />

          <Text style={[styles.text, styles.mediumMargin]}>
              <Text>By clicking Sign Up,I agree to the </Text>
              <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Terms&Services</Text>
              <Text> and </Text> <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text>
          </Text>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity
                style={[styles.button, styles.mediumMargin]}
                onPress={()=>handleSignUp(email, phone, password, url, navigation, "Home")}
            >
                <Text style={[styles.h3, styles.centerText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      </SafeAreaView>
  );
}

function SignInPage({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const url = URL+'/user/login'

  return (
      <SafeAreaView style={{flex:1, margin:30}}>
      <ScrollView>
      <Text style={[styles.h1, styles.centerText, styles.largeMargin]}>Sign In</Text>
          <Text style={[styles.h2, styles.smallMargin]}>Email</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setEmail(text)}
          />

          <Text style={[styles.h2, styles.smallMargin]}>Password</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="go"
              enablesReturnKeyAutomatically = {true}
              onSubmitEditing={()=>handleSignIn(email, password, url, navigation, "Home")}
          />

          <View style={{marginTop: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
            <View style={{flex:1, alignSelf: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{height: 30}} onPress={()=>alert("Pressed!")}>
              <Text> Forget Password? </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1, alignSelf: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{height: 30}} onPress={()=>alert("Pressed!")}>
              <Text> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems:'center', marginTop: 50}}>
            <TouchableOpacity
                style={[styles.button, styles.mediumMargin]}
                onPress={()=>handleSignIn(email, password, url, navigation, "Home")}
            >
                <Text style={[styles.h3, styles.centerText]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </SafeAreaView>
  );
}


// this is the function that handles navigation for picker
function Feed({navigation}){
  const [selectedValue, setSelectedValue] = useState("Debutea");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="md-heart" style={styles.h1}/>
      <Text style={styles.h1}>Welcome back!</Text>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 500 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          navigation.navigate('CafeChoiceScreen', {name: itemValue});
        }
      }>
        <Picker.Item label="select your cafe!!!" value="Home" disabled/>
        <Picker.Item label="Debutea" value="Debutea" />
        <Picker.Item label="PhoBar" value="PhoBar" />
      </Picker>

    </View>
  );
}

// // 
class CafeChoiceScreen extends React.Component{
  // here is some fetch function 

  constructor(props){
    super(props);
    this.state = {
      name: props.route.params.name, 
      star: 0,
      sticker: "🍹",
      img: './components/images/' + props.route.params.name + '.jpg', 
      url: '' 
    }
  }

  // componentDidMount = () => {
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept:'/user/addStars',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         cafe_username: "phobar",
  //         price: 100
  //     }),
  //   })
  //   .then((response) => {
  //     console.log("hello");
  //   })
  //   .catch((error) => {
  //     console.error('Error: ??');
  //   });
  // }
  
  // const name = this.props.navigation.getParams('name','default');
  // const imgName = './components/images/' + cafeName + '.jpg'

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>
        <Image source={require('./components/images/phobar.jpg')} style={{ width: 100, height: 100 }}/>
        <Text style={[styles.h2, styles.mediumMargin]}>Welcome to {this.state.name}</Text>
        <Text style={[styles.text, styles.smallMargin]}>{"\n"}Below is your transaction history at {this.state.name}</Text>
        /* <PersonalInfo /> */
        <TouchableOpacity style={[styles.button, styles.mediumMargin]} onPress={() => {
            this.props.navigation.navigate('RedeemScreen')}}>
          <Text style={styles.text}>Enter your star</Text>
        </TouchableOpacity>
        </Text>
      </View>
      
    );
  }
}


class RedeemScreen extends React.Component{
  // here is some fetch function 

  constructor(props){
    super(props);
    this.state = {
      star: 3, 
      sticker : "🍹",
    }
  }

  // componentDidMount = () => {
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept:'/user/addStars',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         cafe_username: "phobar",
  //         price: 100
  //     }),
  //   })
  //   .then((response) => {
  //     console.log("hello");
  //   })
  //   .catch((error) => {
  //     console.error('Error: ??');
  //   });
  // }
  
  // const name = this.props.navigation.getParams('name','default');
  // const imgName = './components/images/' + cafeName + '.jpg'

  render(){
    return (
    <>
    <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyKeyboard sticker="🍯" star="3"/>
    </View>
    </>  
    );
  }
}



//
// function RedeemScreen({navigation}, cafeName){
//   const [star, setStar] = useState(0);
//   const [sticker] = "🍹";

//   return (
//     <>
//     <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <MyKeyboard sticker="🍯" star="3"/>
//     </View>
//     </>
//   );
// }


//
function HomeScreen({navigation}) {
  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name="Homepage" component={Feed} />
      <Tab.Screen name="Your Account" component={AccountScreen} />
    </Tab.Navigator>
    </>
  );
}


//
function AccountScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./components/images/kirby.jpg')} style={{ width: 100, height: 100 }}/>
      <Text style={{ fontSize: 30 }}>Account Screen</Text>
      <Text style={{ fontSize: 15 }}>bellow is your transaction history ???/asdfasdf</Text>
      <PersonalInfo />
      <Text>you wanna change your information?</Text>
    </View>
  );
}




//
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
const Drawer = createDrawerNavigator();

//
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        { /*<Stack.Screen name="Welcome" component={WelcomePage} />
         <Stack.Screen name="SignUp" component={SignUpPage} />
         <Stack.Screen name="SignIn" component={SignInPage} /> */}
        {/* <Stack.Screen name="Amount" component={AmountPage} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CafeChoiceScreen" component={CafeChoiceScreen} />
        {/*<Stack.Screen name="PhoBar" component={CafeChoiceScreen} /> */}
        {/*<Stack.Screen name="Debutea" component={CafeChoiceScreen} /> */}
        <Stack.Screen name="RedeemScreen" component={RedeemScreen}/>
        {/* <Stack.Screen name="DebuteaStar" component={DebuteaChoiceScreen} /> */}
        {/* <Stack.Screen name="PhoBarStar" component={PhoBarChoiceScreen} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
