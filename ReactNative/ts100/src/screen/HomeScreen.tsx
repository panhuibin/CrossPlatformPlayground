import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native'
import {NavigationProps} from "../core/CoreProps";

interface HomeScreenProps extends NavigationProps{
}

class HomeScreen extends Component<HomeScreenProps> {
  render() {
    return (
      <ScrollView style={styles.root}>
        <HomeButton title="Ui For Test" onPress={this.go2Uies}/>
        <HomeButton title="First Page" onPress={this.go2First}/>
        <HomeButton title="Login Page" onPress={this.go2Login}/>
        <HomeButton title="2 day schedule" onPress={this.go2Schedule}/>
        <HomeButton title="Gesture Anim" onPress={this.go2GestureAnim}/>
      </ScrollView>
    )
  }

  go2GestureAnim = ()=>{
    this.props.navigation.navigate('GestureAnimScreen')
  }
  go2Schedule = ()=> {
    this.props.navigation.navigate('ScheduleScreen')
  }
  go2Uies = () => {
    this.props.navigation.navigate('UiesScreen')
  }

  go2First = ()=> {
    this.props.navigation.navigate('FirstScreen')
  }

  go2Login = ()=> {
    this.props.navigation.navigate('LoginScreen')
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  aButton: {
    fontSize: 30,
    color: 'red',
    margin: 4
  },
})

// = = = = = = = = = = = = = = = = = = = = = = = =

interface HomeButtonProps {
  title: string;
  onPress: () => void;
}

class HomeButton extends Component<HomeButtonProps> {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress}/>
      </View>
    )
  }
}

export default HomeScreen