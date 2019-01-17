import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const Icon = ({ visible, checkmark, bg }) => {
  if (visible) {
    const iconStyles = [styles.icon, styles.iconVisible]
    if (bg) {
      iconStyles.push({ backgroundColor: bg })
    }
    return (
      <View style={iconStyles}>
        {checkmark ? (
          <Image
            source={require('./images/check.png')}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        ) : null}
      </View>
    )
  }
  return <View style={styles.icon}/>
}

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  bg: PropTypes.string,
}

export default Icon
