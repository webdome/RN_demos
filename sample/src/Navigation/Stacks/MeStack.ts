import { createStackNavigator } from 'react-navigation'

import MeScreen from '~pages/MeScreen'
import InfoScreen from '~pages/InfoScreen'

export default createStackNavigator({
  Me: {
    screen: MeScreen,
    navigationOptions: {
      title: '我的'
    }
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      title: '个人信息'
    }
  }
},{
  initialRouteName: 'Me',
})