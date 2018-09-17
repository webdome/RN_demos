import {createStackNavigator} from 'react-navigation';
import MeScreen from "../../Pages/MeScreen";

export default createStackNavigator({
  Me: {
    screen: MeScreen,
    navigationOptions: {
      header: null
    },
  }
})
