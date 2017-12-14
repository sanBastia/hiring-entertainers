import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Button ,
  StatusBar, 
  Picker,
  AsyncStorage
 } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import Icon from 'react-native-vector-icons/FontAwesome';
import create_user_requirements from './API';

import styles from './style';
import create_event, { read_requirements } from './API';

const Performer = ['Standup Comedian', 'MC / Master of Ceremony', 'Singer', 'Band', 'Dancer', 'DJ', 'Influencer', 'Clown', 'Speakers','Magician']

class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            selectedPerformerType: [],
            userId:"",
    
        }
        this.onButtonCreatePress = this.onButtonCreatePress.bind(this);
      }

      componentDidMount(){
        
        AsyncStorage.getItem("userId")
        .then(res => JSON.parse(res))
        .then(data => this.setState({
            userId : data
        }))
        .catch(err => console.log(err))    
    }
      
     
      onButtonCreatePress(){
        const {
            selectedPerformerType,
            userId
          } = this.state
        Alert.alert(
          'New Passion !',
          'Are you sure ?',
          [
            {text: 'Cancel', onDismiss: () => {}},
            {text: 'OK', onPress: () => {
              create_user_requirements(selectedPerformerType,userId);
            }},
          ],
          { cancelable: true }
        )
      }

      onSelectionsChange = (selectedPerformerType) => {
        this.setState({ selectedPerformerType })
      }

     onBackButtonPress = () => Actions.pop();


  render() {  
   
     return (
     
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.subTitle}>
          <Icon name="hashtag" size={20} color="#900" />
            What is my Passion ?
          </Text>
        <SelectMultiple
          items={Performer}
          selectedItems={this.state.selectedPerformerType}
          onSelectionsChange={this.onSelectionsChange}
          rowStyle={styles.styleRowSelectMultiple}
          labelStyle={styles.styleLabelSelectMultitple}
          checkboxStyle={styles.styleCheckBoxSelectMultiple}
          />
      </View>
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onButtonCreatePress}
        >
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>

                 <View style={styles.wrapperButton}>
                                <View style={styles.wrapperButtonTwo}> 
                                     <TouchableOpacity
                                      style={styles.buttonContainerTwo}
                                       onPress={this.onBackButtonPress}>
                                        <Text 
                                        style={styles.buttonText}>
                                          Back 
                                        </Text>
                                    </TouchableOpacity>
                                  </View>
                         </View>
      
      </View>
    );
  }
}

export default Form;
