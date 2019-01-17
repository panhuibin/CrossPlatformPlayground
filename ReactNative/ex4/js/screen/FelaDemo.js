/*
The most simple Fela demo for React Native
( App.js also use <RendererProvider> )
 */

import React, {PureComponent, useContext} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {connect as connectFela, FelaRenderer, ThemeContext} from 'react-fela'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  size: props => ({
    color: 'blue',
    fontSize: props.num
  }) // props只是名字, 其值也可以是component的state. 它其实来自于renderRule()的第二参.
})

class FelaDemo extends PureComponent {
  state = {
    id: 100,
    num: 18
  }

  render() {
    console.log(`render1 = ${JSON.stringify(this.props)}`)
    return (
      <FelaRenderer>
        {renderer =>
          <View style={renderer.renderRule(rules.root)}>
            <Text style={[renderer.renderRule(rules.size, {num: this.state.num}), this.props.styles.basicText]}>
              {this.state.num}
            </Text>
            <Button title="+ 1" onPress={this.onPlusOne}/>
          </View>
        }
      </FelaRenderer>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 6})
  }
}

// 参数是{ navigation: {...}, theme: {...} }
const mapThemeToProps = ({theme}) => {
  console.log(`map theme = ${JSON.stringify(theme)}`)
  return {...theme}
}

export default connectFela(mapThemeToProps)(FelaDemo)


// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)