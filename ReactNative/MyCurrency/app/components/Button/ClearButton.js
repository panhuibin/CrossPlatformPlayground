import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'

import styles from './styles'

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('./images/icon.png')}
        style={styles.image}
      />
      <Text style={styles.text}> {text} </Text>
    </View>
  </TouchableOpacity>
)

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default ClearButton
