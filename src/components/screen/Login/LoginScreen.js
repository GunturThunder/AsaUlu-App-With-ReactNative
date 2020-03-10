import React, { Component } from 'react';
import { View, TextInput, Image, Button,Text,Alert } from 'react-native';

class LoginScreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'#F6F6F6',flex:1}}>
        <View style={{alignItems:'center',marginTop:100}}>
          <Image style={{width:85,height:85}} source={require('../../../../img/logo.png')} />
          <Text style={{color:'#007BFF',fontSize:20,fontWeight: 'bold'}}>AsaUlu</Text>
        </View>
        <View style={{alignItems:'center', marginTop:50, marginBottom:25}}>
          <TextInput style={{borderRadius:15,paddingHorizontal:100,borderWidth:1, borderColor:'#C5BEBE', padding:10}} placeholder="Username" />
          <TextInput style={{borderRadius:15,paddingHorizontal:100,borderWidth:1, borderColor:'#C5BEBE', padding:10, marginTop:10}} placeholder="Password" />
        </View>
        <View style={{marginHorizontal:45}}><Button onPress={() => this.props.navigation.navigate('Home')} title="Login" /></View>
      </View>
    )
  }
}

export default LoginScreen;