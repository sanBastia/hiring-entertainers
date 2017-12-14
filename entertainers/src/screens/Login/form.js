import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button ,StyleSheet ,StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
import read_user from './API';
import validation from '../Utils/validation';
import empty_alert from '../Utils/emptyAlert';

import styles from './style';

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
        username:"",
        password:""
    }
  }
  onButtonPress = () => {
    const { username, password } = this.state;
    const check_username = validation(username);
    const check_password = validation(password);
      if (check_username && check_password) {
        read_user(username,password)
      } else {
        empty_alert()
      }
       
  };
  onRegisterButtonPress = () => {
    Actions.register();
  }

  render() {
    const onButtonPress = this.onButtonPress;
    const onRegisterButtonPress = this.onRegisterButtonPress;
    return (
      <View style={styles.formContainer}>
        <StatusBar barStyle="light-content"/>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({username: text})}
          autoCorrect={false}
          returnKeyType="next"
          placeholder='Username'
          placeholderTextColor='rgba(225,225,225,0.7)'
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          onChangeText={(text) => this.setState({password: text})}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onButtonPress}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onRegisterButtonPress}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
