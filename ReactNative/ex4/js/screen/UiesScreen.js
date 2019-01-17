import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native'
import TestImage from "../component/TestImage";

class UiesScreen extends Component {
  state = {
    num: 10
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
        <Button title="btn3" onPress={() => null} onKiss={this.onKiss}/>
        <TestImage/>
      </TouchableOpacity>
    )
  }

  onKiss = () => {
    console.log(`szw onKiss() get invoked`)
    let {num} = this.state
    this.setState({num: num + 3})
  }

}

export default UiesScreen