import PropTypes from 'prop-types' // no longer belong to the 'react' framework
import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import styles from './styles'

const Container = ({ children, backgroundColor }) => {
  const style = [styles.container]
  if (backgroundColor) {
    style.push({ backgroundColor })
  }
  return (
    // 增加TouchableWithoutFeedback, 是想在键盘弹出时, 在键盘外点击就能dismiss软键盘
    // 不带<View>就会报错, 说React.Children only expected to receive a single React element child
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
}

export default Container
