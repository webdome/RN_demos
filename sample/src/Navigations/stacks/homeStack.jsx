import {createStackNavigator} from 'react-navigation';
import HomeScreen from "../../Pages/HomeScreen";

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    },
  }
})
