import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import Home from './home/HomeContainer'
import Profile from './profile/ProfileContainer'

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} />,
    },
  },
})

export const Main = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
})
