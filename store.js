import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInfo from "./components/Screen.js"
import MyKeyboard from "./components/Keyboard.js"
import HeaderDropdown from "./components/HeaderDropdown.js"
import Icon from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/MaterialIcons'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Page</Text>
//       <Button 
//         title="Press Me"
//         onPress={() => {
//           navigation.navigate('PhoBar')}
//         }
//       />
//     </View>
//   );
// }

// //
// function PhoBarScreen(){
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Pho Bar</Text>
//     </View>
//   );
// }

// function InputScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Input!</Text>
//       <MyKeyboard />
//     </View>
//   );
// }

// // 
// function SettingsScreen(name) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome back, {name}!</Text>
//       <Text>Here is your transaction history: </Text>
//       <PersonalInfo />
//     </View>
//   );
// }

// //
// const Tab = createBottomTabNavigator();

// export default function App() {
//   const {state} = "faye"

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="PhoBar" component={PhoBarScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="md-bulb" style={{fontSize: 16,}}/>
      <Text style={{ font: 10 }}>Welcom back!</Text>
      <Button 
      title="go to Pho Bar"
      onPress={() => {
        navigation.navigate('PhoBar')}
      }
      />
      <Button 
      title="go to Debutea"
      onPress={() => {
        navigation.navigate('Debutea')}
      }
      />
    </View>
  );
}


//
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  /* render function, etc */
  render(){
    return(
      <View>
        <Text>details</Text>
      </View>
    );
  }
}

//
function DebuteaChoiceScreen(){
  return (
    <>
    <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyKeyboard />
      <Button
        title="submit"
        color="green"
      />
    </View>
    </>
  );
}

//
function PhoBarScreen({navigation}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PhoBar Screen</Text>
      <Text>{"\n"}Below is your transaction history at Pho Bar</Text>
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


//
function PhoBarChoiceScreen(){
  return (
    <>
    <Text style={styles.textAboveKeyboard}>Choose the amount you want to redeem</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyKeyboard />
      <Button
        title="submit"
        color="green"
      />
    </View>
    </>
  );
}

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
      <Text>Account Screen</Text>
      <Text style>bellow is your transaction history</Text>
      <PersonalInfo />
    </View>
  );
}

//
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
  }
})


//
// import * as React from 'react';
// <Tab.Screen name="Settings" component={SettingsScreen} />
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to React Native!</Text>
//       <Text style={styles.instructions}>To get started, edit App.js</Text>
//       <Text style={styles.instructions}>{instructions}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// <Stack.Navigator>
        //   <Stack.Screen name="Pho Bar" component={PhoBarScreen} />
        // </Stack.Navigator>// <Stack.Navigator>
      //   <Stack.Screen name="PhoBar" component={PhoBarScreen} />
      // </Stack.Navigator>

// <Tab.Navigator>
      //   <Tab.Screen name="Home" component={HomeScreen} />
      //   <Tab.Screen name="Settings" component={SettingsScreen.bind(this, "faye")} />
      //   <Tab.Screen name="Input" component={InputScreen} />
      // </Tab.Navigator>
