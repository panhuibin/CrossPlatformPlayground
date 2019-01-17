import React from "react";
import {Button} from 'react-native'

import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'
import FirstScreen from '../screen/FirstScreen'
import ChallengeOneScreen from "../screen/ChallengeOneScreen";
import SetStatePitfallScreen from "../screen/SetStatePitfallScreen";
import LoadingListScreen from "../screen/LoadingListScreen";
import ActionSheetDemo from "../screen/ActionSheetDemo";
import GestureAnimScreen from "../screen/GestureAnimScreen";
import DynamicTitleScreen from "../screen/navigation/DynamicTitleScreen";
import FelaDemo from "../screen/FelaDemo";
import ContextDemo from "../screen/ContextDemo";


const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home'},
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {headerTitle: 'Log In'},
    },
    ScheduleScreen: {
      screen: ScheduleScreen,
      navigationOptions: {headerTitle: 'Schedule'},
    },
    SessionDetailScreen: {
      screen: SessionDetailScreen,
      navigationOptions: {headerTitle: 'Session Detail'},
    },
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {headerTitle: 'First Screen'},
    },
    LoadingListScreen: {
      screen: LoadingListScreen,
      navigationOptions: {headerTitle: 'Loading More + Refresh'},
    },
    SetStatePitfallScreen: {
      screen: SetStatePitfallScreen,
      navigationOptions: {headerTitle: 'setState() pitfall'},
    },
    ChallengeOneScreen: {
      screen: ChallengeOneScreen,
      navigationOptions: {headerTitle: 'Challenge One'}
    },
    ActionSheetDemo: {
      screen: ActionSheetDemo,
      navigationOptions: {headerTitle: 'Custom ActionSheet'}
    },
    GestureAnimScreen: {
      screen: GestureAnimScreen,
      navigationOptions: {headerTitle: 'gesture + animation'}
    },
    DynamicTitleScreen: {
      screen: DynamicTitleScreen,
      navigationOptions: (props) => {
        const {navigation} = props
        const {params} = navigation.state
        return {
          title: params.title ? params.title : "Static Title",
          headerRight: (
            <Button
              title={params.mode === 'edit' ? "save" : "edit"}
              onPress={() => navigation.setParams({mode: params.mode === 'edit' ? "" : "edit"})}
            />
          )
        }
      }
    },
    FelaDemo: {
      screen: FelaDemo,
      navigationOptions: {headerTitle: 'fela demo'}
    },
    ContextDemo: {
      screen: ContextDemo,
      navigationOptions: {headerTitle: 'new Context API'}
    },
  },
  {
    headerMode: 'screen',
    gesturesEnabled: true,
  },
)

export default HomeStack