import PropTypes from 'prop-types'
import React from 'react'
import { View, TextInput, TouchableHighlight, Text } from 'react-native'
import color from 'color'
import styles from './styles'

const InputWithButton = ({ editable, onPress, buttonText, ...props }) => {
  const underlayColor = color(styles.$buttonBgColorBase).darken(
    styles.$buttonBgColorModifier
  )

  const containerStyle = [styles.container]
  if (editable === false) {
    containerStyle.push(styles.containerDisabled)
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.currencyTouch}
        underlayColor={underlayColor}
      >
        <Text style={styles.currencyText}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.separator} />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  )
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton
