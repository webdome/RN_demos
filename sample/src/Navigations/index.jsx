import { createStackNavigator } from "react-navigation";
import tabStack from "./stacks/tabStack";
import DetailScreen from '../Pages/DetailScreen';

export default createStackNavigator(
  {
    Tab: {
      screen: tabStack,
      navigationOptions: {
        header: null
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name','DetailScreen')}`,
      }),
    },
  },{
    initialRouteName: "Tab",
  }
);
