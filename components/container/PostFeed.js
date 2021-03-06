import React, {Component}  from 'react'
import{FlatList,Text} from 'react-native'
import {Post} from '../presentation'

export default class PostFeed extends Component{
  
  _renderItem({item}){
    return <Post />
  }
  _keyExtractor(item){
    return item.toString()
  }
  render(){
    return(
      <FlatList
        data={[1,2,3,4]}
         
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}
 