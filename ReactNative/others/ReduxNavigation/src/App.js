import React, {Component} from 'react'
import { NavigationActions } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { BackHandler } from 'react-native'
import { connect, Provider } from 'react-redux'
import { store2 } from './store2'
import NavigationStack from './navigationStack'

const AppNavigation = reduxifyNavigator(NavigationStack, 'root')

const mapStateToProps = state => {
  return {
    state: state.nav
  }
}

const HighOrderAppNavigation = connect(mapStateToProps)(AppNavigation)

export default class App extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    store2.dispatch(NavigationActions.back())
    return true
  };
  render () {
    return (
      <Provider store={store2}>
        <HighOrderAppNavigation />
      </Provider>
    )
  }
}
