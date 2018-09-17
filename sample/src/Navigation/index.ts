import { createStackNavigator } from 'react-navigation'
import TabStack from "~navigation/Stacks/TabStack";
import WelcomeScreen from "~pages/WelcomeScreen";

export default createStackNavigator({
  Tabs: TabStack,
  Welcome: {
    screen: WelcomeScreen,
  }
},{
  initialRouteName: 'Welcome',
  navigationOptions: {
    header: null
  }
})