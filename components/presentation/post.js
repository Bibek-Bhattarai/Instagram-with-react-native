import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config'

export default class Post extends Component {
  state = {
    screenWidth: Dimensions.get('window').width,
    liked:false
  };
  likeToggled=()=>{
    this.setState({
      liked:!this.state.liked
    })
  }
  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const heartColor=this.state.liked?'rgb(252,61,57)':null

    const imageUrl =
      'https://lh3.googleusercontent.com/5Lut2x5NaD8iUGec64ijPVLVQXxFuAdJNG5qzFf7rl5KarqxymVx9txWEABmIDF5PyWtjouYcT89_PsZ9aTs28RA' +
      '=s' +
      imageHeight +
      '-c';
    return (
      <View style={{flex:1,width:100+'%'}}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/wjgCubKmM1g3jirP9MO2DWOYD4bghLWhPVFOmQyNljsTuGfg2F_5N2meKToNGgugemtR4t19gSvSoj9JkMyDexEjcao',
              }}
            />
            <Text style={{ marginLeft: 10 }}>Bibek Bhattarai</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>


        <TouchableOpacity onPress={this.likeToggled}>
          <Image
            style={{

              width: this.state.screenWidth,
              height: 400,
            }}
            source={{
              uri: imageUrl
            }}
          />
        </TouchableOpacity >


        <View style={styles.iconBar}>
          <Image style={[styles.icon, { height: 40, width: 40, tintColor:heartColor}]}
            source={config.images.heartIcon} />
          <Image style={[styles.icon, { height: 35, width: 35 }]}
            source={config.images.bubbleIcon} />
          <Image style={[styles.icon, { height: 30, width: 30 }]}
            source={config.images.arrowIcon} />
        </View>
<View style={styles.iconBar}>
<Image style={[styles.icon, { height: 40, width: 40}]}
            source={config.images.heartIcon} />
            <Text>25 likes</Text>

</View>

      </View>



    );
  }
}
const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 55,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: StyleSheet.hairLineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderBottomColor: 'rgb(220,220,220)',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairLineWidth,
    borderTopWidth: StyleSheet.hairLineWidth,
    alignItems: 'center',

  },
  icon: {
    marginLeft: 5
  },
 
});
