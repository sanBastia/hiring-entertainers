
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import getLocalhost from '../Setting'

export default function create_user_requirements(SelectedPerformerType,userId) {

    const localhost = getLocalhost()
    const url = `${localhost}:3004/user_requirements`;

    SelectedPerformerType.map((item)=>{
        fetch(url,{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                requirement:item.label ,
                userId: userId
            })
          })
            .then(res => res.json())
            .catch(error => handle_error(error))
    })
   

        Alert.alert(
            'Success',
            'You just got a new passions !',
            [
              {text: 'OK', onPress: () => { Actions.tab_feed() }},
            ],
            { cancelable: false }
          )
        
}

export function read_requirements() {

    const localhost = getLocalhost()
    const url = `${localhost}:3004/requirements`;

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