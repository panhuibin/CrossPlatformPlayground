import React, { Component } from 'react'
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 500

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      containerSize: new Animated.Value(styles.$maxContainerSize),
      imageSize: new Animated.Value(styles.$maxImageSize),
    }
  }

  render() {
    const { containerSize, imageSize } = this.state

    const imageStyle = [
      styles.containerImage,
      { width: containerSize, height: containerSize },
    ]
    const topImgStyle = [styles.logo, { width: imageSize }]

    return (
      <View style={styles.container}>
        <Animated.View style={imageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, imageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={topImgStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }

  componentDidMount() {
    const platform = Platform.OS === 'ios' ? 'will' : 'Did'
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${platform}Show`,
      this.keyboardWillShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${platform}Hide`,
      this.keyboardWillHide
    )
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardWillShow = () => {
    const { containerSize, imageSize } = this.state

    Animated.parallel([
      Animated.timing(containerSize, {
        toValue: styles.$minContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageSize, {
        toValue: styles.$minImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }
  keyboardWillHide = () => {
    const { containerSize, imageSize } = this.state
    Animated.parallel([
      Animated.timing(containerSize, {
        toValue: styles.$maxContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageSize, {
        toValue: styles.$maxImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }
}

export default Logo
