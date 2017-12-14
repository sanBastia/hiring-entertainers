
import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView, AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './style';

const onButtonPress = () => Alert.alert('Coming soon!');

const onCreateButtonPress = () => Actions.createEvent();

const onProfileButtonPress = () => Actions.tab_profile();
class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                Profile
            </Text>
      </View>

        <View style={styles.contents}>
         
            <Card containerStyle={styles.card} title="Running Events" titleStyle={styles.titles} />
          <TouchableOpacity onPress={onCreateButtonPress}>
            <Card containerStyle={styles.card} title="created Events" titleStyle={styles.titles} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onButtonPress}>
            <Card containerStyle={styles.card} title="Search Performer" titleStyle={styles.titles} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfileButtonPress}>
            <Card containerStyle={styles.card} title="Profile" titleStyle={styles.titles} />
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>

    );
  }
}

export default Profile;