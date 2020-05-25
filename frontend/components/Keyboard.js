import React, {Component} from 'react'
// import { Text, View, Button } from 'react-native';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';


class MyKeyboard extends Component {  

  constructor (props) {
    super(props);
    this.state = {
      newValue: '',
      height: 40, 
      name: "press me"
    }
  }

  render() {  
    return (  
      <View style={styles.container}>  
      	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      		<View style={{flex: 50}}>
  				<TextInput 
  					onChangeText={(value) => this.setState({value})}
          			placeholder="Enter The Amount"  
          			underlineColorAndroid='transparent'  
        			style={styles.TextInputStyle}  
          			keyboardType={'numeric'}  />
          	</View>
		</TouchableWithoutFeedback>
      </View>  
    );  
  }  
}  

//
export default MyKeyboard;

// 
const styles = StyleSheet.create({
  container: {
  	position: 'absolute', 
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  TextInputStyle: {  
  	alignItems: 'center',
    textAlign: 'center',  
    height: 40,  
    width: 160,
    borderRadius: 1000,  
    borderWidth: 2,  
    borderColor: '#009688', 
    backgroundColor: '#F5FCFF', 
    marginBottom: 100  
  }  
});
