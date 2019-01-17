import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ChallengeOneScreen from "../screen/ChallengeOneScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' },
    },
    ChallengeOneScreen: {
      screen: ChallengeOneScreen,
      navigationOptions: {headerTitle: 'Challenge One'}
    }
  },
  {
    headerMode: 'screen',
  },
)

export default HomeStack