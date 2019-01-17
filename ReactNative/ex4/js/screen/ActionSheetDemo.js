import React, {Component} from 'react'
import {View, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Animated} from 'react-native'
import {connect} from 'react-redux'
import ActionSheet from "../component/action_sheet/ActionSheet";

class ActionSheetDemo extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TextInput style={styles.input} placeholder="edit text / text input"/>
        <Button title="action sheet" onPress={this.press}/>
        <ActionSheet ref={(target) => this.actionSheet = target}
                     title="Select a color"
                     data={['Red', 'Green', 'Blue']}
                     actions={[this.clickRed, this.clickGreen, this.clickBlue]}
        />
      </View>
    )
  }

  press = () => {
    this.actionSheet.show()
  }

  clickRed = () => {
    console.log(`click red`)
  }
  clickGreen = () => {
    console.log(`click green`)
  }
  clickBlue = () => {
    console.log(`click blue`)
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    fontSize: 20,
    padding: 10
  }
})


export default ActionSheetDemo