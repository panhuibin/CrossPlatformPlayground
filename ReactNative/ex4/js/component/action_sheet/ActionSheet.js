import React from 'react'
import {
  View, StyleSheet, Dimensions, TouchableWithoutFeedback, Platform, BackHandler,
  Animated, Keyboard, Text, TouchableOpacity
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
var contentHeight = 260
const itemHeight = 50
const animDuration = 450

class ActionSheet extends React.Component {
  state = {
    isShowing: false,
    y: new Animated.Value(contentHeight)
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onPressBack)
    }

    //计算高度
    let size = this.props.data.length
    contentHeight = (size + 1) * itemHeight + size //最后是divider的个数
    console.log(`szw contentHeight = ${contentHeight}`)
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onPressBack)
    }
  }

  onPressBack = () => {
    if (this.state.isShowing) {
      this.dismiss()
      return true  // 我消费了这个事件, 系统就不用管了
    } else {
      return false // 我不处理. 系统来管吧
    }
  }


  render() {
    console.log(`render() ${this.state.isShowing} : ${screenWidth} - ${screenHeight}`)
    if (!this.state.isShowing) {
      return (<View/>)
    }

    return (
      <TouchableWithoutFeedback onPress={() => this.dismiss()}>
        <View style={styles.root}>
          <Animated.View style={[styles.content_Anim, {transform: [{translateY: this.state.y}], height: contentHeight}]}>
            {this.renderContent()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderContent = () => {
    let {data} = this.props
    var thisChildren = []
    data.forEach((item, index) => {
      let thisKey = `as_option_${index}`
      thisChildren.push(
        <TouchableOpacity key={thisKey} onPress={() => this.clickOneOption(this.props.actions[index])}>
          <View>
            <View style={styles.divider}/>
            <Text style={styles.textOption}>{item}</Text>
          </View>
        </TouchableOpacity>
      )
    })

    return (
      <View style={[styles.content_Options, {height: contentHeight}]}>
        <Text key="as_title"
              style={{fontWeight: 'normal', fontSize: 18, textAlign: 'center', padding: 10, height: itemHeight}}> {this.props.title} </Text>
        {thisChildren}
      </View>
    )
  }

  clickOneOption = (action) => {
    action()
    this.dismiss()
  }

  show() {
    if (this.state.isShowing) {
      return
    }
    Keyboard.dismiss()
    this.setState({...this.state, isShowing: true}, this._showInternal)
  }

  _showInternal() {
    console.log(`szw _showInternal()`)
    Animated.timing(
      this.state.y,
      {toValue: 0, duration: animDuration}
    ).start()
  }

  dismiss() {
    Animated.timing(this.state.y,
      {toValue: contentHeight, duration: animDuration}
    ).start(isFinished => {
      if (isFinished) {
        this.setState({...this.state, isShowing: false})
      }
    })

  }


}

const styles = StyleSheet.create({
  root: {
    // 不加absolute的position, 那结果就不会ActionSheet全屏出现了, 而是依赖flexbox (如垂直的llay)
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#0000007e',
    // opacity: 0.6  //1是全黑了
  },
  content_Anim: {
    width: screenWidth - 20,
    height: contentHeight,
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center'
  },
  content_Options: {
    height: contentHeight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  divider: {
    backgroundColor: 'black',
    height: 1
  },
  textOption: {
    height: itemHeight,
    color: '#1e1e1e',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5
  }
})

export default ActionSheet