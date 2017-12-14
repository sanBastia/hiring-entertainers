
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import getLocalhost from '../../Setting'

export default function create_event(StartEvent, EndEvent, CategoryEvent, SelectedPerformerType, Title, Description, userId, Performers) {

    const localhost = getLocalhost()
    const url_1 = `${localhost}:3004/events`;
    const url_2 = `${localhost}:3004/event_requirements`

     fetch(url_1,{
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            title_event: Title,
            description: Description,
            start_event: StartEvent,
            end_event: EndEvent,
            category: CategoryEvent,
            userId: userId,
            status: 0 
        })
      })
        .then(res => res.json())
        .then(events => {
            if(events){

                SelectedPerformerType.map((item)=>{

                    fetch(url_2,{
                        method:'POST',
                        headers: {'Content-Type' : 'application/json'},
                        body : JSON.stringify({
                            eventId: events.id,
                            requirement: item.label,
                            total: Performers[item.value]
                        })

                    })
                    .then(res => res.json())
                    .done()
                })

                Alert.alert(
                    'Success',
                    'You just Created A new events !',
                    [
                      {text: 'OK', onPress: () => { Actions.tab_event() }},
                    ],
                    { cancelable: false }
                  )
            }
        })
        .catch(error => handle_error(error))

    
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