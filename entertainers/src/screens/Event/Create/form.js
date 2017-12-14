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
import DatePicker from 'react-native-datepicker'
import SelectMultiple from 'react-native-select-multiple'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import customStyle from './customStyle';
import create_event, { read_requirements } from './API';

const Performer = ['Standup Comedian', 'MC / Master of Ceremony', 'Singer', 'Band', 'Dancer', 'DJ', 'Influencer', 'Clown', 'Speakers', 'Magician']

class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            StartEvent:"",
            EndEvent:"",
            CategoryEvent: "Event Category",
            selectedPerformerType: [],
            Performers:{}, //count how many performer you need depend on it types example: {MC / Master of Ceremony: 3}
            Title:"",
            Description:"",
            userId:"",
            req: []
        }
        this.renderPerformerTextInput = this.renderPerformerTextInput.bind(this);
        this.onButtonCreatePress = this.onButtonCreatePress.bind(this);
      }
      
      componentDidMount(){

        const self = this;
        let arr = [];
        AsyncStorage.getItem("userId")
        .then(res => JSON.parse(res))
        .then(data => this.setState({
            userId : data
        }))
        .catch(err => console.log(err))

      
       read_requirements().then((data) => {
          
          data.map((item)=>{
            arr.push(item);
          })
          self.setState({
            req: self.state.req.concat(arr)
          })
        })
      }

      handlePerformer(item,text){
       const obj = {}
  
       obj[item] = text;
       const res = Object.assign(this.state.Performers, obj);
         this.setState({
            Performers : res
          })
      }

      onButtonCreatePress(){
        const {
            StartEvent,
            EndEvent,
            CategoryEvent,
            selectedPerformerType,
            Performers,
            Title,
            Description,
            userId
          } = this.state
        Alert.alert(
          'New Event',
          'Are you sure ?',
          [
            {text: 'Cancel', onDismiss: () => {}},
            {text: 'OK', onPress: () => {
              create_event(StartEvent, EndEvent, CategoryEvent, selectedPerformerType, Title, Description, userId, Performers);
            }},
          ],
          { cancelable: true }
        )
      }

      onSelectionsChange = (selectedPerformerType) => {
        this.setState({ selectedPerformerType })
      }

      renderPerformerTextInput(){
        if(this.state.selectedPerformerType.length){

          return this.state.selectedPerformerType.map((item,index)=>{
            return (
              <TextInput
              key={index}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => this.handlePerformer(item.label,text)}
              autoCorrect={false}
              keyboardType='default'
              returnKeyType="next"
              placeholder={'How many '+item.label+' ?'}
              placeholderTextColor='rgba(225,225,225,0.7)'
              underlineColorAndroid='transparent'
            />
            )
          })
        }
         return null;
      }

  render() {  
    console.log(this.state.userId, 'user id');
    console.log(this.state.selectedPerformerType, 'selected');
    console.log(this.state.Performers, 'performer');
    
    return (
     
      <View style={styles.formContainer}>
        <StatusBar barStyle="light-content"/>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({Title: text})}
          autoCorrect={false}
          keyboardType='default'
          returnKeyType="next"
          placeholder='Title'
          placeholderTextColor='rgba(225,225,225,0.7)'
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.description}
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({Description: text})}
          keyboardType='default'
          returnKeyType="next"
          placeholder='Description'
          placeholderTextColor='rgba(225,225,225,0.7)'
          underlineColorAndroid='transparent'
        />

         <DatePicker
         date={this.state.StartEvent}
        style={styles.datepicker}
        mode="date"
        placeholder='Start Event'
        format="YYYY-MM-DD"
        customStyles={customStyle}
        onDateChange={(date) => {this.setState({StartEvent: date})}}
        androidMode='spinner'
      />
       <DatePicker
       date={this.state.EndEvent}
        style={styles.datepicker}
        mode="date"
        placeholder='End Event'
        format="YYYY-MM-DD"
        customStyles={customStyle}
        onDateChange={(date) => {this.setState({EndEvent: date})}}
        androidMode='spinner'
      />
        <View style={{backgroundColor: 'rgba(225,225,225,0.2)', marginBottom: 10}}>
            <Picker
                style={styles.picker}
                selectedValue={this.state.CategoryEvent}
                onValueChange={(itemValue, itemIndex) => this.setState({CategoryEvent: itemValue})}>
                <Picker.Item key={'unselectable'} label="Event Category" value="Event Category" />
                <Picker.Item key="1" label="Wedding" value="Wedding" />
                <Picker.Item key="2" label="Birthday" value="Birthday" />
                <Picker.Item key="2" label="Concert" value="Concert" />
                <Picker.Item key="2" label="Sweet 17" value="Sweet 17" />
                <Picker.Item key="2" label="Bazaar / Festival" value="Bazaar / Festival" />
                <Picker.Item key="3" label="Other Event" value="Other Event" />
            </Picker>
        </View>

        <View>
          <Text style={styles.subTitle}>
          <Icon name="hashtag" size={20} color="#900" />
            What kind of Performer you need ?
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
        {this.renderPerformerTextInput()}
  
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onButtonCreatePress}
        >
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

export default Form;
