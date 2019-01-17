import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

class SessionDetailScreen extends Component {
  render() {
    const { navigation } = this.props
    const title = navigation.getParam('title', 'XXXX')
    const desp = navigation.getParam('desp', '(empty)')
    const start = navigation.getParam('start', '**')
    const end = navigation.getParam('end', '**')

    return (
      <View>
        <Text style={styles.time}>{start} - {end}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desp}> {desp}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  time: {
    color: '#f8f8f8',
    backgroundColor: '#616161',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 17,
    marginRight: 20,
    marginLeft: 20,
  },
  desp: {
    fontSize: 19,
    marginTop: 11,
    marginRight: 20,
    marginLeft: 20,
  },
})

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(SessionDetailScreen)