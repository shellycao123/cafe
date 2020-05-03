import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
