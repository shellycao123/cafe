import React, { Component } from 'react';
import { View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation';


class A extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };

  // etc..
}

class B extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings!',
  };

  // etc..
}

const HomeStack = createStackNavigator({ A });
const SettingsStack = createStackNavigator({ B });

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});