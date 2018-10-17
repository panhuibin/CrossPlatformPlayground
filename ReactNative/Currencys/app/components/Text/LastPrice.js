import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'

import styles from './styles'

const LastPrice = ({ date, base, quote, conversionRate }) => (
  <Text style={styles.text}>
    1 {base} = {conversionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
)

LastPrice.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
}

export default LastPrice
