import React, { Component, useState } from 'react';
import { View, Text, Linking, TextInput, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView, Keyboard, Alert} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import styles from './style'
import {handleSignUp} from './handleRequest.js'
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

function SignUpPage() {
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
              onSubmitEditing={()=>handleSignUp(email, phone, password, url)}
          />

          <Text style={styles.normalText, {paddingTop:30}}>
              <Text>By clicking Sign Up,I agree to the </Text>
              <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Terms&Services</Text>
              <Text> and </Text> <Text style={{fontWeight: 'bold'}} onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text>
          </Text>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>handleSignUp(email, phone, password, url)}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      </SafeAreaView>
  );
}

function SignInPage() {
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
                onPress={()=>handleSignIn(email, password, url)}
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



const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Amount" component={AmountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
