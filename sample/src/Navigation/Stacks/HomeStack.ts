import { createStackNavigator } from 'react-navigation'

import HomeScreen from '~pages/HomeScreen'
import DetailScreen from '~pages/DetailScreen'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: '详情'
    }
  }
},{
  initialRouteName: 'Home',
})

export default HomeStack