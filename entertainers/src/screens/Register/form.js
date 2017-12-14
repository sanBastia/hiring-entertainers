import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button ,StyleSheet, StatusBar, Picker} from 'react-native';
import { Actions } from 'react-native-router-flux';
import create_user from './API';
import validation from '../Utils/validation';
import empty_alert from '../Utils/emptyAlert';

import styles from './style';

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
        name: "",
        username:"",
        password:"",
        status: 0,
        
    }
  }
  onButtonPress = () => {
    const {name, status, username, password } = this.state;
    const check_username = validation(username);
    const check_password = validation(password);
    const check_name = validation(name);
    if(check_name && check_password && check_username){
        create_user(username, name, password, status)
    }
    empty_alert()
   
};

  render() {
    const onButtonPress = this.onButtonPress;
    const status = ['Manager','Performer'];
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
          autoCapitalize="none"
          onChangeText={(text) => this.setState({name: text})}
          autoCorrect={false}
          returnKeyType="next"
          placeholder='Name'
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
         <View style={{backgroundColor: 'rgba(225,225,225,0.2)', marginBottom: 10}}>
         <Picker
                style={styles.picker}
                selectedValue={this.state.status}
                onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
                 {status.map((item,index) => {
                  return <Picker.Item key={index} label={item} value={index} />
                })}
    
            </Picker>
            </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onButtonPress}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
