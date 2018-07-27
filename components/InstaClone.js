import React, { Component } from 'react';
 
 import {MainFeed,Login,Camera,Profile,Register} from './screen'
 import {SwitchNavigator,TabNavigator,StackNavigator} from 'react-navigation'
  
  const Tabs=TabNavigator({
    
    feed:MainFeed,
    camera:Camera,
    profile:Profile,
    
  })
  const IntroStack=StackNavigator({
    login:Login,
    register:Register,
    
  })


   const MainStack=SwitchNavigator({
    intro:IntroStack,
    main:Tabs,
    
  })
  
export default class InstaClone extends Component {

    
  render() {  
    return (
     <MainStack />
    )
  }
}
 
