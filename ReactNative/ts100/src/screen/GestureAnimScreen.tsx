import React, {Component} from 'react'
import {View, StyleSheet, Text, PanResponder, Dimensions, PanResponderInstance} from 'react-native'

const CIRCLE_SIZE = 76

class GestureAnimScreen extends Component {
  state = {
    style: {backgroundColor: 'green', left: 0, top: 0}
  }
  downLeft = 0
  downTop = 0
  currLeft = 0
  currTop = 0
  private gesture!: PanResponderInstance;

  render() {
    return (
      <View
        {...this.gesture.panHandlers}
        style={[styles.circle, this.state.style]}/>
    )
  }

  componentWillMount() {
    this.gesture = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.setState({style: {...this.state.style, backgroundColor: 'red'}})
      },
      onPanResponderRelease: (evt, gestureState) => {
        // // 将downLeft, downTop记录下来. 以备下一次拖动时用
        // this.downLeft = this.currLeft
        // this.downTop = this.currTop
        // this.setState({style: {...this.state.style, backgroundColor: 'green'}})
        let screenWidth = Dimensions.get('window').width
        console.log(`curr = ${this.currLeft}, rad = ${CIRCLE_SIZE/2}, wid = ${screenWidth/2}`)
        if(this.currLeft + CIRCLE_SIZE/2 >= screenWidth/2) {
          this.currLeft = screenWidth - CIRCLE_SIZE;
        } else {
          this.currLeft = 0
        }
        this.downLeft = this.currLeft
        this.downTop = this.currTop
        this.setState({style: {...this.state.style, backgroundColor: 'green', left: this.currLeft}})
      },

      onPanResponderMove: (evt, gestureState) => {
        // TODO 后续可以加边界判断, 左界是0, 右界是Dimensions.get('window').width
        this.currLeft = this.downLeft + gestureState.dx
        this.currTop = this.downTop + gestureState.dy
        this.setState({style: {backgroundColor: 'red', left: this.currLeft, top: this.currTop}})
      },
    })
  }

}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'green',
    position: 'absolute'
  },
})

export default GestureAnimScreen