
import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './style';

const onButtonPress = () => Alert.alert('Coming soon!');

const onCreateButtonPress = () => Actions.createEvent();

const data = [
    'History 1',
    'History 2',
    'History 3',
    'History 4',
    'History 5',
    'History 6',
    'History 7',
    'History 8',
    'History 9',
];

class MyHistory extends Component {
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
                MyHistory
            </Text>
      </View>
            {
                data.map((history,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={onButtonPress}>
                        <Card containerStyle={styles.card} title={history} titleStyle={styles.titles} />
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
      </View>

    );
  }
}

export default MyHistory;