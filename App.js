import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import React, { Component } from 'react'; 
import { Image } from 'react-native';

import HomeScreen from './screens/home';
import PostScreen from './screens/PostScreen';
import RecipeScreen from './screens/recipes'
 


 

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
 
  {
    Home: { screen: HomeScreen, 
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => (
            <Image
              source={require('./images/home.png')} style = {{height: 25, width : 25, alignItems: 'center'}} />
             ) }},

    Post : {screen: PostScreen, navigationOptions: {
      
      tabBarLabel: '',
      tabBarIcon: () => (
            <Image
              source={require('./images/add.png')} style = {{height: 25, width : 25, alignItems: 'center'}} />
             ) }},

    Recipes : {screen: RecipeScreen, navigationOptions: {
      
              tabBarLabel: '',
              tabBarIcon: () => (
                    <Image
                      source={require('./images/dish.png')} style = {{height: 25, width : 25, alignItems: 'center'}} />
                     ) },
                    },         
      },
  {
    initialRouteName: 'Home'
  },
  
)

// app entry point
export default createAppContainer( 
  createStackNavigator(
    {
      App: HomeNavigator,
    
    },
    {
      
      transitionConfig: () => zoomIn(), // screen to screen transitions
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false, // remove top bar and make full screen
      },
      defaultNavigationOptions: { 
        gesturesEnabled: true, 
      }
    }
  )
);