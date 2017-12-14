import React from 'react';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import { Text, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CreateEvent from '../screens/Event/Create'
import MyHistory from '../screens/Event/Read-DONE-MYHISTORY'
import MyEvent from '../screens/Event/Read-ONGOING-MYEVENT'
import AppliedPerformer from '../screens/Event/Read-APPLIED-PERFORMER'
import ApplyingPerformer from '../screens/Event/Read-APPLYING-PERFORMER'
import AddRequirements from '../screens/Requirement';
import SearchEvent from '../screens/Event/Read-SEARCH-EVENT'



class TabIcon extends React.Component {
  render() {
    var color = this.props.selected ? '#301c2a' : '#c10909';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
        <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
      </View>
    );
  }
}



class RootRouter extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      userId : '',
      userStatus: 0
    }
    this.renderRootManager = this.renderRootManager.bind(this);
    this.renderRootPerformer = this.renderRootPerformer.bind(this);
    this.handleRoot = this.handleRoot.bind(this);
  }
  componentDidMount(){
    
    AsyncStorage.getItem("status")
    .then(res => JSON.parse(res))
    .then(data => this.setState({
        userStatus : data
    }))
    .catch(err => console.log(err))    
}


  renderRootManager(){
      return (
        <Scene key="root">
        
                <Scene key="login" component={Login} hideNavBar />
                <Scene key="register" component={Register}  hideNavBar />
                <Scene key="createEvent" component={CreateEvent} hideNavBar />
                <Scene key="AppliedPerformer" component={AppliedPerformer} hideNavBar />
            
                <Scene
                  key="main"
                  tabs={true}
                  tabBarPosition="bottom"
                  swipeEnabled
                  showLabel={false}
                  activeBackgroundColor="white"
                  inactiveBackgroundColor="#251a34"
                  tabBarStyle={{ backgroundColor: '#eee' }}
                >
                  <Scene
                    key="tab_feed"
                    title="Home"
                    iconName="home"
                    icon={TabIcon}
                    component={Home}
                    initial
                    hideNavBar
                  />
                  <Scene
                    key="tab_history"
                    title="History"
                    iconName="history"
                    icon={TabIcon}
                    hideNavBar
                    component={MyHistory}
                   />
                   <Scene
                     key="tab_event"
                     title="My Event"
                     iconName="list"
                     icon={TabIcon}
                     hideNavBar
                     component={MyEvent}
                    />
                    <Scene
                     key="tab_profile"
                     title="Profile"
                     iconName="user-circle"
                     icon={TabIcon}
                     hideNavBar
                     component={Profile}
                    />
        
                </Scene>
              </Scene>
      );
  }

  renderRootPerformer(){
    return (
      <Scene key="root">
      
              <Scene key="login" component={Login} hideNavBar />
              <Scene key="register" component={Register}  hideNavBar />
              <Scene key="AddRequirements" component={AddRequirements} hideNavBar />
              <Scene key="ApplyingPerformer" component={ApplyingPerformer} hideNavBar />
                     
              <Scene
                key="main"
                tabs={true}
                tabBarPosition="bottom"
                swipeEnabled
                showLabel={false}
                activeBackgroundColor="white"
                inactiveBackgroundColor="#251a34"
                tabBarStyle={{ backgroundColor: '#eee' }}
              >
                <Scene
                  key="tab_feed"
                  title="Home"
                  iconName="home"
                  icon={TabIcon}
                  component={Home}
                  initial
                  hideNavBar
                />
                <Scene
                  key="tab_search"
                  title="Search"
                  iconName="search"
                  icon={TabIcon}
                  hideNavBar
                  component={SearchEvent}
                 />
                 <Scene
                   key="tab_event"
                   title="My Event"
                   iconName="list"
                   icon={TabIcon}
                   hideNavBar
                   component={MyEvent}
                  />
                  <Scene
                   key="tab_profile"
                   title="Profile"
                   iconName="user-circle"
                   icon={TabIcon}
                   hideNavBar
                   component={Profile}
                  />
      
              </Scene>
            </Scene>
    );
  }
  handleRoot(){
    
    if(this.state.userStatus){
       return this.renderRootPerformer()
    }
    return this.renderRootManager()
  }
  render(){
    return (
      <Router>
      {this.handleRoot()}
      </Router>
    );
  }
  
}

export default RootRouter;