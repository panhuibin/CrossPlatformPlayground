import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native'
import TestImage from "../component/TestImage";

interface Props{
  onPress: ()=> void;
  title: string;
}

class UiesScreen extends Component<Props> {
  state = {
    num: 10
  }

  render() {
    // @ts-ignore
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
        <Button title="btn3" onPress={() => null} onKiss={this.onKiss}/>
        <TestImage img={require('../../assets/icon.png')}/>
      </TouchableOpacity>
    );
  }

  onKiss = () => {
    console.log(`szw onKiss() get invoked`)
    let {num} = this.state
    this.setState({num: num + 3})
  }

}

export default UiesScreen