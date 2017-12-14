
import React, { Component } from 'react';
import { Card, Button, List, ListItem  } from 'react-native-elements'
import {
  Alert, View, Text, TouchableOpacity, Image, ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import read_applied, { read_applying } from './API';


import styles from './style';

const onBackButtonPress = () => Actions.pop();


class AppliedPerformer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userId: '',
      items: []
    }
    // this.handleReadApplying = this.handleReadApplying.bind(this);
  }

  componentDidMount() {
    
    const self = this;

    read_applied(this.props.eventId).then((data) => {
      let arr = []
      data.map((item)=>{
        arr.push(item);
      })
      this.setState({
        data: this.state.data.concat(arr)
      })
    })
               
    }
  
    // handleReadApplying(req){
    //   const self = this;
    //  return(
    //      read_applying(req).then((data)=>{
    //     let arr=[]
    //     data.map((item)=>{
    //       arr.push(item);
    //     })
    //     this.setState({
    //       items: this.state.items.concat(arr)
    //     })

    //     self.state.items.map((item,index)=>{
    //       return (
    //         <ListItem
    //         key={index}
    //         title={item.username}
    //       />
    //       );
    //     })
    //   }).done()
    
    //   )
    // }
  
  render() {
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
                              {/* <List containerStyle={{marginBottom: 20}}>
                                {
                                  this.handleReadApplying(item.requirement)
                                }
                              </List> */}
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

export default AppliedPerformer;