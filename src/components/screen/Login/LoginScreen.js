import React, { Component } from 'react';
import { View, TextInput, Image, Button, Text, Alert, AsyncStorage } from 'react-native';
import axios from 'axios'

class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    if (AsyncStorage.getItem('token')) {
      this.props.navigation.navigate('Home');
    }
  }

  onChangeEmail = (e) => {
    console.log(e)
    this.setState({
      email:e
     })
  }

  onChangePass = (e) => {
    console.log(e)
    this.setState({
      password:e
     })
  }

  onSubmit = (e) => {
    console.log(this.state)
    axios
        .post("http://192.168.1.13:4040/user/login", this.state)
        .then(res => {
            console.log(res.data);
            AsyncStorage.setItem('token', res.data.token);
            AsyncStorage.setItem('user-id', res.data.id_user);
            AsyncStorage.setItem('Status', res.data.Status );
            AsyncStorage.setItem('isAuth', true);
            this.props.navigation.navigate('Home');
        })
        .catch(err => {
            console.log(err);
        })
}

  render() {
    console.log(this.state)
    return (
      <View style={{ backgroundColor: '#F6F6F6', flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 120 }}>
          <Image style={{ width: 85, height: 85 }} source={require('../../../../img/logo.png')} />
          <Text style={{ color: '#007BFF', fontSize: 20, fontWeight: 'bold' }}>AsaUlu</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 25 }}>
          <TextInput onChangeText={this.onChangeEmail} style={{ borderRadius: 15, borderWidth: 1, borderColor: '#C5BEBE', paddingVertical: 10,paddingHorizontal:112}} placeholder="Email" />
          <TextInput secureTextEntry={true} onChangeText={this.onChangePass} style={{ borderRadius: 15, paddingHorizontal: 100, borderWidth: 1, borderColor: '#C5BEBE', padding: 10, marginTop: 10 }} placeholder="Password" />
        </View>
        <View style={{ marginHorizontal: 45 }}><Button onPress={this.onSubmit} title="Login" /></View>
      </View>
    )
  }
}

export default LoginScreen;