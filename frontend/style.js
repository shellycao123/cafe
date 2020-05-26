import {StyleSheet} from 'react-native';

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
    pageTitle: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 30
    },
    sectionTitle:{
      fontSize: 30,
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 10,
    },
    normalText:{
      fontSize: 20
    },
    inputText:{
      height: 50,
      fontFamily: "Cochin",
      backgroundColor: 'rgb(224, 224, 224)',
      padding: 10
    },
    buttonText:{
      textAlign: "center",
      textAlignVertical: "center",
      fontWeight: "bold",
      fontSize: 20
    },
    button:{
      height: 50,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "rgb(60, 150, 200)",
      margin: 30
    },
});

export default styles;
