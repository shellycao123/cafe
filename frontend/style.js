import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h1:{
    fontSize: 50
  },
  h2:{
    fontSize: 30
  },
  h3:{
    fontSize: 20
  },
  text:{
    fontSize: 15
  },
  inputText:{
    height: 50,
    fontFamily: "Cochin",
    backgroundColor: 'rgb(224, 224, 224)',
    padding: 10
  },
  button:{
    height: 60,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 3,
  },
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
  }, 

  largeMargin:{
    marginTop: 50,
    marginBottom: 30
  },
  mediumMargin:{
    marginTop: 30,
    marginBottom: 20
  },
  smallMargin:{
    marginTop: 20,
    marginBottom: 10
  },

  centerText:{
    textAlign: "center",
  },

  textAboveKeyboard: {
    textAlign: 'center', 
    position: 'absolute', 
    right: 70,
    top:300,
  },  
    
});

export default styles;
