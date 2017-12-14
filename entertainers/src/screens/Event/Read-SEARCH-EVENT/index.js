
import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView, Picker
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import read_search_event from './API';


import styles from './style';

const onButtonPress = () => Alert.alert('Coming soon!');

class SearchEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        category: "",
        data:[]
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  onApplyButtonPress = (eventId) =>{
    const res = {
        eventId: eventId
      }
      return Actions.ApplyingPerformer(res);
  } 

  handleSearch(){
   return this.state.data.map((events,index)=>{
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
                         <TouchableOpacity
                          style={styles.buttonContainerTwo}
                           onPress={() => { this.onApplyButtonPress(events.id) }}>
                            <Text 
                            style={styles.buttonText}>
                              Apply ?
                            </Text>
                        </TouchableOpacity>
                      </View>
                  </View>
            </Card>
        )
    })
  }

  render() {
    return (
     
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                Events
            </Text>
      </View> 
      <View style={{backgroundColor: 'rgba(225,225,225,0.2)', marginBottom: 10}}>
            <Picker
                style={styles.picker}
                selectedValue={this.state.category}
                onValueChange={(itemValue, itemIndex) => {
                    this.setState({ category: itemValue })
                    return read_search_event(this.state.category).then((data) => {
                        let arr = [];
                        data.map((item)=>{
                          arr.push(item);
                        })
                        this.setState({
                          data: arr
                        })
                      })
                }}>
                <Picker.Item key={'unselectable'} label="Event Category" value="Event Category" />
                <Picker.Item key="1" label="Wedding" value="Wedding" />
                <Picker.Item key="2" label="Birthday" value="Birthday" />
                <Picker.Item key="3" label="Concert" value="Concert" />
                <Picker.Item key="4" label="Sweet 17" value="Sweet 17" />
                <Picker.Item key="5" label="Bazaar / Festival" value="Bazaar / Festival" />
                <Picker.Item key="6" label="Other Event" value="Other Event" />
            </Picker>
        </View>

            {this.handleSearch()}
        </ScrollView>
      </View>

    );
  }
}

export default SearchEvent;