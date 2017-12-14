import { Alert,  AsyncStorage }  from 'react-native';
import { Actions } from 'react-native-router-flux';
import getLocalhost from '../Setting'


export default function read_user(username,password){
    const localhost = getLocalhost()

            fetch(`${localhost}:3004/users?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(users => handle_success(users))
            .catch(error => handle_error(error));
    }

    function handle_success(users){
        const isOurUser = users.length
        if(isOurUser){

          AsyncStorage.setItem(
            "userId",
            JSON.stringify(users[0].id),
            err => {
              if (err) throw err;
            }
          );

          AsyncStorage.setItem(
            "status",
            JSON.stringify(users[0].status),
            err => {
              if (err) throw err;
            }
          );

          AsyncStorage.setItem(
            "username",
            JSON.stringify(users[0].username),
            err => {
              if (err) throw err;
            }
          );
             Alert.alert(
                'Success',
                'Success Login !',
                [
                  {text: 'OK', onPress: () => Actions.tab_feed()},
                ],
                { cancelable: false }
              )
        }

        if(!isOurUser){
            Alert.alert(
                'Error',
                'Unknown user or Error Password !',
                [
                  {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false }
              )
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