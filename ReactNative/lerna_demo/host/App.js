import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import add from '@six/calc'

export default class App extends React.Component {
  render() {
    let addedResult = add(1, 2)
    return (
      <View style={styles.container}>
        <Text>Open up host/App.js to start working on your app!</Text>
        <Text> result = {addedResult} </Text>
      </View>
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