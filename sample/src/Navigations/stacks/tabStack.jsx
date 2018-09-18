import React from "react";
import {Image} from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import homeStack from "./homeStack";
import meStack from "./meStack";

export default createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image source={require('./images/home.png')} style={{width: 32, height: 32}}/>;
        }
      }
    },
    Me: {
      screen: meStack,
      navigationOptions: {
        tabBarLabel: "Me",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image source={require('./images/me.png')} style={{width: 32, height: 32}}/>;
        }
      }
    }
  },{
    initialRouteName: "Home",
    backBehavior: "none",
  }
);
