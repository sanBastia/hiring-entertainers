
import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView, AsyncStorage,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { read_ongoing_event } from './API';


import styles from './style';

const onButtonPress = () => Alert.alert('Coming soon!');

const onCreateButtonPress = (eventId) => {
  const res = {
    eventId: eventId
  }
  Actions.AppliedPerformer(res)
}

class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userId: ''
    }
  }

  componentDidMount() {
    
            const self = this;
            let arr = [];
            AsyncStorage.getItem("userId")
            .then(res => JSON.parse(res))
            .then(data => {
               this.setState({ userId : data })

               read_ongoing_event(this.state.userId).then((data) => {
                
                data.map((item)=>{
                  arr.push(item);
                })
                self.setState({
                  data: self.state.data.concat(arr)
                })
              })
            })
            .catch(err => console.log(err))       
    }

  render() {
    return (
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                MyEvent
            </Text>
      </View>
            {
              this.state.data.map((events, index)=>{
                  return(    
                        <Card key={index} containerStyle={styles.card} title={events.title_event} titleStyle={styles.titles}>
                              <Text style={styles.description}>
                                      {events.description}
                              </Text>
                              <View style={styles.IconOne}>
                              <Text style={styles.IconTwo}>
                                <Icon name="calendar-o" size={20} color="#900" />
                                     -Start Event : {events.start_event}
                              </Text>
                              </View>

                              <View style={styles.IconOne}>
                              <Text style={styles.IconTwo}>
                              <Icon name="calendar-o" size={20} color="#900" />
                                      -End Event : {events.end_event}
                              </Text>
                              </View>

                              <View style={styles.wrapperButton}>
                                  <View style={styles.wrapperButtonTwo}> 
                                    <TouchableOpacity style={styles.buttonContainerOne} onPress={onButtonPress}>
                                     <Text style={styles.buttonText}>
                                        Close This event
                                        </Text>
                                    </TouchableOpacity>
                                  </View>

                                  <View style={styles.wrapperButtonTwo}> 
                                     <TouchableOpacity
                                      style={styles.buttonContainerTwo}
                                       onPress={() => { onCreateButtonPress(events.id) }}>
                                        <Text 
                                        style={styles.buttonText}>
                                        see Who's Applied ?
                                        </Text>
                                    </TouchableOpacity>
                                  </View>
                              </View>
                        </Card>
                  );
              })  
            }

        </ScrollView>
      </View>

    );
  }
}

export default MyEvent;