import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 400;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const styles = StyleSheet.create({
  h1:{
    fontSize: normalize(50)
  },
  h2:{
    fontSize: normalize(30)
  },
  h3:{
    fontSize: normalize(20)
  },
  text:{
    fontSize: normalize(15)
  },
  inputText:{
    height: normalize(50),
    fontFamily: "Cochin",
    backgroundColor: 'rgb(224, 224, 224)',
    padding: normalize(10)
  },
  button:{
    height: normalize(60),
    width: normalize(200),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: normalize(3),
  },
  // container: {  
  //   flex: 1,  
  //   alignItems: 'center',  
  //   justifyContent: 'center',  
  // }, 

  largeMargin:{
    marginTop: normalize(50),
    marginBottom: normalize(30)
  },
  mediumMargin:{
    marginTop: normalize(30),
    marginBottom: normalize(20)
  },
  smallMargin:{
    marginTop: normalize(20),
    marginBottom: normalize(10)
  },

  centerText:{
    textAlign: "center",
  },
    
});

export default styles;
