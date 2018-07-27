import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
   Dimensions
} from 'react-native';
import config from '../../config'

import {PostFeed} from '../container'


export default class MainFeed extends Component {
   state = {
    screenHeight: Dimensions.get('window').height,
    
  }
   
  render() {
     
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text> Instagram</Text>
         
        </View> 
        <View style={{width:100 + '%',height:this.state.screenHeight-50}}>
        <PostFeed />
    
         </View>
         
         </View>



    );
  }
}
const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 50,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: StyleSheet.hairLineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});
