import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from "~navigation/Stacks/HomeStack";
import MeStack from "~navigation/Stacks/MeStack";


export default createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  Me: {
    screen: MeStack
  }
})