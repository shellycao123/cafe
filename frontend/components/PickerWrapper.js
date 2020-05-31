import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, TouchableOpacity, Text, StyleSheet, Picker } from 'react-native'

export default class PickerWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pickerValue = "a"
    }
  }

  render () {
    return (
      <View style={ styles.container }>
          <Picker
            selectedValue={(this.state && this.state.pickerValue) || "a"}
            style={{ height: 25, width: 300}}
            onValueChange={(value) => {
              this.setState({pickerValue: value});
            }}
          >
            <Picker.Item label="PhoBar" value="a" />
            <Picker.Item label="Debutea" value="b" />
            <Picker.Item label="Ootoya" value="c" disabled/>
        </Picker>
      </View>
    )
  }
}

//
const styles = StyleSheet.create({
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconWrap: {
    marginTop: 2,
    marginLeft: 3
  },
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
  }, 
})



