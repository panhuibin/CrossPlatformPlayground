import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class App extends Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

    return (
      <ScrollView >
        <Text style={{ color: 'red', fontSize: 23 }}>Hello World </Text>
        <Pizza style={{ width: 200, height: 120 }} />
        <Image source={pic} style={{ width: 386, height: 220 }} />
        <Greeting name="React Native" id="23" />
        <Blink myText="I am React Native" />
        <Button title="click me" onPress={() => Alert.alert('Clicked!')} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Greeting extends Component {
  render() {
    return (
      <Text> Hello : {this.props.name}  - {this.props.id} </Text>
    )
  }
}

// may use Redux or Mobx to modify the state rather than calling "setState()" directly
class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingText: true }

    setInterval(() => {
      this.setState(oldState => {
        return { isShowingText: !oldState.isShowingText }
      })
    }, 1200)
  }

  render() {
    let display = this.state.isShowingText ? this.props.myText : ' '
    return (
      <Text> {display} </Text>
    )
  }
}

class Pizza extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <TextInput placeholder="pizaa" onChangeText={(text) => this.setState({ text })} />
        <Text>
          {this.state.text
            .split(' ')
            .map((word) => word && '🍕')
            .join('-')
          }
        </Text>
      </View>
    )
  }
}

// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)