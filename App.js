import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';

import store from './src/components/redux/store';
import HomeScreen from './src/components/screen/Home/HomeScreen';
import LoginScreen from './src/components/screen/Login/LoginScreen'
import ProductScreen from './src/components/screen/Product/ProductScreen';

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen
  }
)

const homeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Product: ProductScreen
  },
  {
    initialRouteName: 'Login'
  }
)

const AppNavigator = createSwitchNavigator(
  {
      Home: homeNavigator
      // Profile: ProfileScreen
  }
);

const AppContainer =  createAppContainer(AppNavigator);

function App(){
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;