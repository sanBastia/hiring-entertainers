
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import getLocalhost from '../../Setting'


export function read_ongoing_event(userId) {
     
        const status = `status=${0}`
        const localhost = getLocalhost()
        const url = `${localhost}:3004/events?userId=${userId}&${status}`;
    
       return fetch(url)
              .then(res => res.json())
              .then(requirements => handle_read_success(requirements))
              .catch(error => handle_error(error));
    
    }
    
    function handle_read_success(req){
        if(req){
           return req;
        }
    }
    
    function handle_error(error){
        if(error)
         console.log('There has been a problem with your fetch operation: ' + error.message);
             Alert.alert(
            'Error',
            'There has been a problem with your fetch operation',
            [
              {text: 'OK', onPress: () => {}},
            ],
            { cancelable: false }
          )
        
    }