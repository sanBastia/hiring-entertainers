import {
    Dimensions,
    PixelRatio
  } from 'react-native';
  
  const window = Dimensions.get('window');
  
  const styles = {
  
    container: {
      flex: 1,
      backgroundColor: '#301c2a'
    },
    card: {
      flex: 1,
      backgroundColor: '#301c2a'
    },
    image: {
      height: 70,
      width: 150,
      alignSelf: 'center',
      bottom: 20,
    },
    contentContainer: {
      paddingVertical: 10,
    },
    titles:{
      color: '#c10909'
    },
    Header:{
        alignItems: 'center',
        justifyContent: 'center'
      },
    title:{
      color: "#FFF",
      textAlign: 'center',
      opacity: 0.9,
      fontSize: 40
    },
  }
  
  export default styles;