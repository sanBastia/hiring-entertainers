
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userStatus: 0
    }
    this.renderManagerHome = this.renderManagerHome.bind(this);
    this.renderPerformerHome = this.renderPerformerHome.bind(this);
  }

  componentDidMount(){
    
    AsyncStorage.getItem("status")
    .then(res => JSON.parse(res))
    .then(data => this.setState({
        userStatus : data
    }))
    .catch(err => console.log(err))    
}  

onAddButtonPress = () => Actions.AddRequirements();
onSearchButtonPress = () => Actions.tab_search();

  renderManagerHome(){
    return (
      <View style={styles.contents}>
      <TouchableOpacity onPress={onButtonPress}>
        <Card containerStyle={styles.card} 
              title="Event List" 
              titleStyle={styles.titles}>
          <View style={styles.icon}>
              <Icon name="list-ul" size={40} color="#900"/>
          </View> 
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCreateButtonPress}>
        <Card containerStyle={styles.card} title="Create Event" titleStyle={styles.titles}>
        <View style={styles.icon}>
              <Icon name="calendar-plus-o" size={40} color="#900"/>
          </View> 
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={onButtonPress}>
        <Card containerStyle={styles.card} title="Search Performer" titleStyle={styles.titles}>
        <View style={styles.icon}>
              <Icon name="search" size={40} color="#900"/>
          </View> 
        </Card> 
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfileButtonPress}>
        <Card containerStyle={styles.card} title="Profile" titleStyle={styles.titles}>
        <View style={styles.icon}>
              <Icon name="user-o" size={40} color="#900"/>
          </View> 
        </Card>
      </TouchableOpacity>
    </View>
    );
  }

  renderPerformerHome(){
    return (
      <View style={styles.contents}>
      <TouchableOpacity onPress={this.onAddButtonPress}>
        <Card containerStyle={styles.card} title="Add Requirements" titleStyle={styles.titles}>
          <View style={styles.icon}>
              <Icon name="plus" size={40} color="#900"/>
          </View> 
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.onSearchButtonPress}>
        <Card containerStyle={styles.card} title="Search events" titleStyle={styles.titles}>
          <View style={styles.icon}>
              <Icon name="search" size={40} color="#900"/>
          </View> 
        </Card>
      </TouchableOpacity>
    </View>
    );
  }

  handleRender(){
    if(this.state.userStatus){
      return this.renderPerformerHome()
    }
    return this.renderManagerHome()
  }

  render() {
    return (
     
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                {this.state.userStatus ? 'HiPerformers' : 'HiManagers'}
            </Text>
      </View>
          {this.handleRender()}
        </ScrollView>
      </View>

    );
  }
}

export default Home;