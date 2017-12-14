
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import getLocalhost from '../../Setting'


export default function read_applied(eventId) {
    
        const localhost = getLocalhost()
        const url = `${localhost}:3004/event_requirements?eventId=${eventId}`;
    
       return fetch(url)
              .then(res => res.json())
              .then(requirements => handle_read_success(requirements))
              .catch(error => handle_error(error));
    
    }

 export function create_applied(userId,eventId,requirement){
    const localhost = getLocalhost()
    const url = `${localhost}:3004/applied_performers`;

    return  fetch(url,{
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            userId: userId,
            eventId: eventId,
            requirement: requirement,
            status: 0
        })
      })
      .then(res => res.json())
      .then(applied => {
          if(applied){

              Alert.alert(
                  'Success',
                  'You just Applied an Event !',
                  [
                    {text: 'OK', onPress: () => { Actions.tab_feed() }},
                  ],
                  { cancelable: false }
                )
          }
      })
      .catch(error => handle_error(error))
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

    