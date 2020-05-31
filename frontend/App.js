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
const URL="http://192.168.1.170:3000"


function WelcomePage({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, margin:30, alignItems:'center'}}>
    <ScrollView>
      <Text style={styles.pageTitle}>Welcome page🎉</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("SignUp")}
      >
          <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("SignIn")}
      >
          <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("Amount")}
      >
          <Text style={styles.buttonText}>Amount Page</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
}

function SignUpPage({navigation}) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const url = URL+'/user/signup'
  return (
      <SafeAreaView style={{flex: 1, margin:30}}>
      <ScrollView>
          <Text style={styles.sectionTitle}>Email</Text>
          <TextInput
              style={styles.inputText}
              placeholder="me@RewardIN.com"
              onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.sectionTitle}>Phone</Text>
          <TextInput
              style={styles.inputText}
              placeholder="212-383-5083"
              onChangeText={(text) => setPhone(text)}
          />

          <Text style={styles.sectionTitle}>Password</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={()=>handleSignUp(email, phone, password, url, navigation, "Home")}
          />

          <Text style={styles.normalText, {paddingTop:30}}>
              <Text>By clicking Sign Up,I agree to the </Text>
              <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Terms&Services</Text>
              <Text> and </Text> <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text>
          </Text>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>handleSignUp(email, phone, password, url, navigation, "Home")}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
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
      <Text style={styles.pageTitle}>Sign In</Text>
          <Text style={styles.sectionTitle}>Email</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.sectionTitle}>Password</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => setPassword(text)}
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
                style={styles.button}
                onPress={()=>handleSignIn(email, password, url, navigation, "Home")}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </SafeAreaView>
  );
}

function AmountPage(){
  return (
    <SafeAreaView style={{flex:1, margin: 30, justifyContent: 'center', alignItems: 'center'}}>
    <ScrollView keyboardShouldPersistTaps='never'>
      <Text style={styles.pageTitle}>Please Enter Amount</Text>
      <TextInput
      style={[styles.inputText, {height: 60, width: 250, fontSize: 30}]}
      keyboardType = "decimal-pad"
      />
      <TouchableOpacity
          style={styles.button}
          onPress={()=>null}
      >
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  )
}

function DebuteaScreen({navigation}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Debutea Screen</Text>
      <Text>{"\n"}Below is your transaction history at Debutea</Text>
      <PersonalInfo />
      <Button 
        title="enter your star"
        onPress={() => {
          navigation.navigate('DebuteaStar')}
        }
      />
    </View>
  );
}

//
function Feed({navigation}){
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="md-heart" style={styles.homepageWelcomeIconStyle}/>
      <Text style={styles.homepageWelcomeTextStyle}>Welcome back!</Text>
      <View style={styles.container}>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 500 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          navigation.navigate(itemValue)
        }
      }>
        <Picker.Item label="select your cafe!!!" value="Home"/>
        <Picker.Item label="Debutea" value="Debutea" />
        <Picker.Item label="PhoBar" value="PhoBar" />
      </Picker>
      </View>

    </View>
  );
}

function PhoBarScreen({navigation}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./components/images/phobar.jpg')} style={{ width: 100, height: 100 }}/>
      <Text style={{ fontSize: 30, position:"absolute", top:200}}>Welcomd back to Pho Bar</Text>
      <Text style={{ fontSize: 15, position:"absolute", top:220}}>{"\n"}Below is your transaction history at Pho Bar</Text>
      <PersonalInfo />
      <Button 
        title="enter your star"
        onPress={() => {
          navigation.navigate('PhoBarStar')}
        }
      />
    </View>
  );
}


function trysecond({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


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
function DetailsScreen({navigation}){
  // const [title, setStar] = useState('Details');

  return (
    <View>
        <Text style = {{ textAlign: 'center', fontSize: 20 }}>details page</Text>
        <Button 
          title="go to Details"
          onPress={() => {
            navigation.navigate('PhoBarStar')}
          }
        />
    </View>
  );
}


//
function DebuteaChoiceScreen(){
  const [star, setStar] = useState(0);
  const [sticker] = "🍹";

  return (
    <>
    <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyKeyboard />
      <Button
        title="submit"
        color="green"
        onPress={() => { setStar(star + 3) }} 
      />
      <Text>Right now you have: {star} stars {sticker}</Text>
    </View>
    </>
  );
}


// 
function PhoBarChoiceScreen(){
  const [star, setStar] = useState(0);
  const [sticker] = "🍑";

  return (
    <>
    <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyKeyboard />
      <Button
        title="submit"
        color="green"
        onPress={() => { setStar(star + 4) }} 
      />
      <Text>Right now you have: {star} stars {sticker}</Text>
    </View>
    </>
  );
}




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Amount" component={AmountPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhoBar" component={PhoBarScreen} />
        <Stack.Screen name="Debutea" component={DebuteaScreen} />
        <Stack.Screen name="DebuteaStar" component={DebuteaChoiceScreen} />
        <Stack.Screen name="PhoBarStar" component={PhoBarChoiceScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
