import React, { useState, Component } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Picker, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInfo from "./components/Screen.js"
import MyKeyboard from "./components/Keyboard.js"
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'semantic-ui-react'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
const Drawer = createDrawerNavigator();


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



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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


const styles = StyleSheet.create({
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconWrap: {
    marginTop: 2,
    marginLeft: 3
  }, 
  textAboveKeyboard: {
    textAlign: 'center', 
    position: 'absolute', 
    right: 70,
    top:300,
  }, 
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
  },  
  textStyle:{  
    margin: 24,  
    fontSize: 25,  
    fontWeight: 'bold',  
    textAlign: 'center',  
  },  
  pickerStyle:{  
    height: 150,  
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',  
  }, 
  homepageWelcomeTextStyle:{
    fontSize: 40, 
    position:"absolute", 
    top: 300
  }, 
  homepageWelcomeIconStyle:{
    fontSize: 70, 
    position:"absolute", 
    top: 230
  }, 
})

