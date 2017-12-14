import { Alert }  from 'react-native';
import { Actions } from 'react-native-router-flux';
import getLocalhost from '../Setting'


export default function create_user(username, name, password, status){
    const localhost = getLocalhost()
    const url = localhost+':3004/users';
   const checking = check_user(username);
        if (checking) {
            Alert.alert(
                'Error',
                `${username} Username Already Registered !`,
                [
                {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false}
            )
        }
        if (!checking) {
            fetch(url,{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    username: username,
                    password: password,
                    name: name,
                    status: status
                })
              })
            .then(res => res.json())
            .then(res => handle_success(res))
            .catch(error => handle_error(error));
        }
           
    }

    function handle_success(res){
        if(res){
            Alert.alert(
                'Success',
                'Please login now !',
                [
                  {text: 'OK', onPress: () => {
                      Actions.login();
                  }},
                ],
                { cancelable: false}
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

    function check_success(users){
        if(users){
           return true;
        }
        return false;
    } 

    function check_user(username){
        const localhost = getLocalhost()
        
                fetch(`${localhost}:3004/users?username=${username}`)
                .then(res => res.json())
                .then(users => check_success(users))
                .catch(error => handle_error(error));
    }








