import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export default class First extends React.Component {
  state = {id: 100}

  render() {
    return (
      <View style={styles.root}>
        <Text> Hello Expo {this.state.id}</Text>
        <Button title="+ 1" onPress={this.onIncrease}/>
      </View>
    )
  }

  onIncrease = () => {
    this.setState({id: this.state.id + 1})
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});