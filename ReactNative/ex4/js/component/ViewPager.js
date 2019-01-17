import React from 'react'
import { View, StyleSheet, ScrollView, ViewPagerAndroid, Platform } from 'react-native'

export class ViewPager extends React.Component {
  constructor(props) {
    super(props)
    this.handleHorizontalScroll = this.handleHorizontalScroll.bind(this)
  }

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS()
    } else {
      return this.renderAndroid()
    }
  }

  renderIOS() {
    //TODO
    return null
  }

  renderAndroid() {
    return (
      <ViewPagerAndroid
        ref={c => (this._scrollview = c)}
        onPageSelected={this.handleHorizontalScroll}
        style={styles.container}
      >
        {this.renderContent()}
      </ViewPagerAndroid>
    )
  }

  renderContent() {
    const style = styles.card
    return React.Children.map(this.props.children, (child, i) => (
      <View style={style} key={'r_' + i}>
        {child}
      </View>
    ))
  }

  handleHorizontalScroll(ev) {
    let selectedIndex = ev.nativeEvent.position
    this.props.onPageChanged(selectedIndex)
    console.log(`szw scrollListener: selected = ${selectedIndex}`)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: 'transparent',
  },
})
