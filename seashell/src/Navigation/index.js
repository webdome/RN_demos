import React from 'react';
import {
  createStackNavigator
} from 'react-navigation'
import AppHeader from '../Components/AppHeader'
import HomeScreen from '../Pages/HomeScreen'
import DetailScreen from '../Pages/DetailScreen'
import SearchScreen from '../Pages/SearchScreen'
import TestScreen from '../Pages/TestScreen'

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
  Search: {
    screen: SearchScreen
  },
  Test: {
    screen: TestScreen
  },
}, {
  initialRouteName: "Home",
  navigationOptions: ({ navigation }) => ({
    header: <AppHeader navigation={navigation} />
    // header: null
  }),
})