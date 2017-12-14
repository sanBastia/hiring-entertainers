
import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView, AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import read_applied, { create_applied } from './API';


import styles from './style';

const onBackButtonPress = () => Actions.pop();


class ApplyingPerformer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userId: '',
      username:'',
    }
  }

  componentDidMount() {

    const self = this;
    let arr = [];
    AsyncStorage.getItem("userId")
    .then(res => JSON.parse(res))
    .then(data => {
       this.setState({ userId : data })
    })
    .catch(err => console.log(err))    

    AsyncStorage.getItem("username")
    .then(res => JSON.parse(res))
    .then(data => {
       this.setState({ username : data })
    })
    .catch(err => console.log(err))    

      
    read_applied(this.props.eventId).then((data) => {
      let arr = []
      data.map((item)=>{
        arr.push(item);
      })
      self.setState({
        data: self.state.data.concat(arr)
      })
    })
               
    }

    onApplyButtonPress = (requirement) => {
        const {
            userId
        } = this.state
        const {
            eventId
        } = this.props

        Alert.alert(
            'Apply this event ?',
            'Are you sure ?',
            [
              {text: 'Cancel', onDismiss: () => {}},
              {text: 'OK', onPress: () => {
                create_applied(userId,eventId,requirement,username);
              }},
            ],
            { cancelable: true }
          )
    }
  
  
  render() {
      console.log(this.props, this.state, 'blaah');
    return (
     
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <View style={styles.Header}>
            <Text style={styles.title}>
            <Icon name="hashtag" size={40} color="#900" />
                Performers
            </Text>
      </View>
            {
                this.state.data.map((item,index)=>{
                    return(
                        <Card key={index} containerStyle={styles.card} title={item.requirement} titleStyle={styles.titles}>
                               <View style={styles.IconOne}>
                                    <Text style={styles.IconTwo}>
                                    <Icon name="hashtag" size={20} color="#900" />
                                     WeNeed: {item.total}
                                </Text>
                              </View>
                              <View style={styles.wrapperButtonTwo}> 
                                     <TouchableOpacity
                                      style={styles.buttonContainerTwo}
                                       onPress={() => { this.onApplyButtonPress(item.requirement) }}>
                                        <Text 
                                        style={styles.buttonText}>
                                          Apply !
                                        </Text>
                                    </TouchableOpacity>
                                  </View>
                        </Card>
                    )
                })
            }
                        <View style={styles.wrapperButton}>
                                <View style={styles.wrapperButtonTwo}> 
                                     <TouchableOpacity
                                      style={styles.buttonContainerTwo}
                                       onPress={onBackButtonPress}>
                                        <Text 
                                        style={styles.buttonText}>
                                          Back 
                                        </Text>
                                    </TouchableOpacity>
                                  </View>
                         </View>
      
        </ScrollView>
      </View>

    );
  }
}

export default ApplyingPerformer;