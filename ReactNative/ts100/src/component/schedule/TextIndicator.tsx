import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {ViewProps} from "../../core/CoreProps";

interface Props extends ViewProps{
  titles: string[];
  selectedIndex: number;
}

class TextIndicator extends React.Component<Props> {

  render() {
    let { titles } = this.props
    var children: JSX.Element[] = []
    titles.forEach((item, index) => {
      let thisKey = `vp_indi_${item}`
      children.push(
        <View key={thisKey}>
          <Text key={thisKey + '_text'} style={styles.indicator}> {item} </Text>
          {this.getIndicatorBar(index)}
        </View>,
      )
    })
    return (
      <View style={styles.root}>
        {children}
      </View>
    )
  }

  getIndicatorBar = (which: number) => {
    if (which === this.props.selectedIndex) {
      return <View style={styles.bar}/>
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  root: {
    // flex: 1, // 加了这个, TextIndicator就占了好大一块地方(但仍没有占满一屏)
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
  },
  bar: {
    backgroundColor: '#1565c0',
    height: 6,
  },
})

export default TextIndicator