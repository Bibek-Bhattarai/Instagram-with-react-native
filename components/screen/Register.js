import React, {Component} from 'react'
import {Text,View,Button,TextInput,StyleSheet} from 'react-native'

class Register extends Component{
  state={
    credentials:{
      login:'',
      password:''
    }
  }
  updateText(text,field){
   let newCredentials=Object.assign(this.state.credentials)
   newCredentials[field]=text
   this.setState({
     credentials:newCredentials
   })
  }
  register=()=>{
    if(this.state.credentials.login=='bibek'& this.state.credentials.password=='1234'){
      this.props.navigation.navigate('feed')
    }
    else{
      alert('Invalid UserName and Password')
       
    }
//this.props.navigation.navigate('register')
  }
   
  render(){
    return (
      <View style={{
        width:100+'%',
        height:100+'%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
      
      }} >
      <Text>REGISTER</Text>
      <TextInput 
      style={styles.input} 
        value={this.state.credentials.input}
        placeholder='UserName'
        autoCorrect={false}
        onChangeText={text=>this.updateText(text,'login')}
        />
      <TextInput 
      style={styles.input} 
        value={this.state.credentials.pass}
        placeholder='Password'
        autoCorrect={false}
        secureTextEntry
        onChangeText={text=>this.updateText(text,'password')}
        />
      <Button title='SignUp' onPress={this.register}/>
      </View>
    )
  }


}
const styles=StyleSheet.create({
  input:{
        height:30,
        width:200,
        backgroundColor:'rgb(209, 201, 200)',
        marginBottom:10
        },

})
export default Register