import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';

import store from './src/components/redux/store';
import HomeScreen from './src/components/screen/Home/HomeScreen';
import LoginScreen from './src/components/screen/Login/LoginScreen'
import ProductScreen from './src/components/screen/Product/ProductScreen';
import AddProductScreen from './src/components/screen/Product/AddProductScreen';
import EditProductScreen from './src/components/screen/Product/EditProductScreen';
import ProductDetailScreen from './src/components/screen/Product/prooductDetailScreen';

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen
  }
)

const homeNavigator = createStackNavigator(
  {
    Home: {
      screen : HomeScreen,
      navigationOptions:{
        header:null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions:{
        header:null
      }
    },
    Product: ProductScreen,
    AddProduct: AddProductScreen,
    EditProduct: EditProductScreen,
    ProductDetail: ProductDetailScreen
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