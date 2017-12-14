
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import getLocalhost from '../../Setting'


export default function read_search_event(category) {
     
        const status = `status=${0}`
        const localhost = getLocalhost()
        const url = `${localhost}:3004/events?q=${category}&${status}`;
    
       return fetch(url)
              .then(res => res.json())
              .then(events => handle_read_success(events))
              .catch(error => handle_error(error));
    
    }

export function read_user_skill(userId){

    const localhost = getLocalhost()
    const url = `${localhost}:3004/user_requirements?userId=${userId}`;

   return fetch(url)
          .then(res => res.json())
          .then(events => handle_read_success(events))
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