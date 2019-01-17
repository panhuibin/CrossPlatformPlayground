import React, {ComponentProps, PropsWithRef} from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  ViewPagerAndroid,
  Platform,
  NativeSyntheticEvent,
  ViewPagerAndroidOnPageSelectedEventData
} from 'react-native'
import {ViewProps} from "../../core/CoreProps";

interface Props extends ViewProps{
  onPageChanged: (index: number) => void;
}

export class ViewPager extends React.Component<Props> {
  private _scrollview: any;

  constructor(props: Props) {
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

  handleHorizontalScroll(ev: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData>) {
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
