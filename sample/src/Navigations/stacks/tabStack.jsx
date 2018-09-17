import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import homeStack from "./homeStack";
import meStack from "./meStack";

export default createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="apps" size={35} color={tintColor} />;
        }
      }
    },
    Me: {
      screen: meStack,
      navigationOptions: {
        tabBarLabel: "Me",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="account-circle" size={35} color={tintColor} />;
        }
      }
    }
  },{
    initialRouteName: "Home",
    backBehavior: "none",
  }
);
