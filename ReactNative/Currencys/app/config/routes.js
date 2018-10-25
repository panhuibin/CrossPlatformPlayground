/* eslint-disable object-curly-newline */

import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Options from '../screens/Options'
import Themes from '../screens/Theme'
import CurrencyList from '../screens/CurrencyList'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      // 不加这个, Home页最上面, statusBar下面就会有一个白条
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  
  {
    headerMode: 'screen',
  },
)

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
})

export default createStackNavigator({
  Home: HomeStack,
  CurrencyList: CurrencyListStack,
})