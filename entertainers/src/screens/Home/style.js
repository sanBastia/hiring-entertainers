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
    contents: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 10
    },
    card: {
      width: window.width / 2.4,
      height: window.width / 3,
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
    icon:{
      alignSelf: 'center'
    }
  }
  
  export default styles;