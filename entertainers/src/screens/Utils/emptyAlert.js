import { Alert } from 'react-native';

export default function empty_alert(){
    return Alert.alert(
        'Error',
        'All Field cannot Be empty !',
        [
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: false }
      )
}