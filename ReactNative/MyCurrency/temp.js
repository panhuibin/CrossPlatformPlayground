import React, { Component } from 'react'
import { View, Text, StatusBar, Button } from 'react-native'


class Child extends Component {
  constructor(props) {
    super(props)
  }
  
  click() {
    this.props.changeChild('newName')
  }
  
  render() {
    return (
      <View>
        <Text> Hello {this.props.desp} </Text>
        <Button
          title="click => pass event to parents"
          onPress={this.click.bind(this)}
        />
      </View>
    )
  }
}

export default Child