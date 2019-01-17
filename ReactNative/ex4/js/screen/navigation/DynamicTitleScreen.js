import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'

class DynamicTitleScreen extends Component{
  render(){
    const {navigation} = this.props
    const {params} = navigation.state
    const textAction = params.mode === 'edit' ? 'edit' : 'done'
    
    return (
      <View style={styles.root}>
        <Text style={{fontSize: 24}}>{textAction}</Text>
        <TextInput style={{backgroundColor: 'white', fontSize: 20}}
          onChangeText={ text => {
            if (params.mode === 'edit') {
              navigation.setParams({title: text})
            } else {
              console.log(`no change allowed outside the edit mode`)
            }
          }
          }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default DynamicTitleScreen