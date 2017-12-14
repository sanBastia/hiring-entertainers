import React from 'react';
import {
  Image, View, KeyboardAvoidingView,Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Form from './form';

const Login = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.loginContainer}>
      <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                HiringEntertainers
            </Text>
      </View>
      </View>
      <View>
        <Form />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;