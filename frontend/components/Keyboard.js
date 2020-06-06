import React, {Component} from 'react'
// import { Text, View, Button } from 'react-native';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';


class MyKeyboard extends Component {  

  constructor (props) {
    super(props);
    this.state = {
      height: 40, 
      name: "press me",
      star: this.props.star,
      value: 0
    }
  }

  parseIntegerInside(currval){
    if(currval == NaN){
      currval = 0
    }
    return currval
  }

  render() {  
    return (  
      <View style={styles.container}>  
      	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      		<View style={{flex: 50}}>
  				<TextInput 
                onChangeText={(currval) => {
                  currval = Number.parseInt(currval)
                  currval = Number.isNaN(currval) ? 0 : currval
                  this.setState({value: currval})
                  }
                }
          			placeholder="Enter The Amount"  
          			underlineColorAndroid='transparent'  
        			  style={styles.TextInputStyle}  
          			keyboardType={'numeric'}  />
          </View>
		    </TouchableWithoutFeedback>
        <Button
            title="submit"
            color="green"
            onPress={() => this.setState({star: Number.parseInt(this.state.star) + Number.parseInt(this.state.value)})} 
        />
        <Text>Right now you have: {this.state.star} stars {this.props.sticker}</Text>
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


///* onChangeText={(value) => this.setState({value})} */
