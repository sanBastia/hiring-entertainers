import React from 'react';
import {
  Image, View, KeyboardAvoidingView, Text, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Form from './form';

const AddRequirements = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView style={styles.contentContainer}>
     <View style={styles.Header}>
       <Text style={styles.title}>
       <Icon name="hashtag" size={40} color="#900" />
         Requirements
       </Text>
      </View>
      <View>
        <Form />
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AddRequirements;