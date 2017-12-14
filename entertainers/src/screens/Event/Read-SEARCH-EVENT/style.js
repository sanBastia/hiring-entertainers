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
      color: '#c10909',
      fontSize: 30
    },
    Header:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
      color: '#FFF',
      textAlign: 'center',
      opacity: 0.9,
      fontSize: 60
    },
    buttonContainerOne:{
      backgroundColor: '#86af49',
      paddingVertical: 15,
      marginBottom: 10
    },
    buttonContainerTwo:{
      backgroundColor: '#c10909',
      paddingVertical: 15,
      marginBottom: 10
    },
    buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
    },
    wrapperButton:{
        flex: 1,
        flexDirection: 'row',
    },
    wrapperButtonTwo:{
      flex: 1,
      marginTop: 2
   },
   IconOne: {
     padding: 2, 
     marginBottom: 10
    },
    IconTwo:{
      color:'#FFF', 
      fontSize: 20
    },
    description: { marginBottom: 10, alignSelf: 'center', color:'#FFF', fontSize: 20 },
    picker:{
        height: 40,
        padding: 10,
        color: '#fff'
    },
  }
  
  export default styles;