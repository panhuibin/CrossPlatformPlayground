import React from 'react'
import {View, Image} from 'react-native'

class TestImage extends React.Component {

  render() {
    return (
      <View>
        <Image source={this.props.img}/>
      </View>)
  }
}


export default TestImage