import { createStackNavigator } from "react-navigation";
import tabStack from "./stacks/tabStack";
import CalculateScreen from '../Pages/CalculateScreen';
import ScrollScreen from '../Pages/ScrollScreen';

export default createStackNavigator(
  {
    Tab: {
      screen: tabStack,
      navigationOptions: {
        header: null
      },
    },
    Calculate: {
      screen: CalculateScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name','CalculateScreen')}`,
      }),
    },
    Scroll: {
      screen: ScrollScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name','ScrollScreen')}`,
      }),
    },
  },{
    initialRouteName: "Tab",
  }
);
