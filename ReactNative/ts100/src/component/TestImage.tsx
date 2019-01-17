import React from 'react'
import {View, Image, ImageSourcePropType} from 'react-native'


interface TestImageProps {
  img: ImageSourcePropType
}

class TestImage extends React.Component<TestImageProps> {

  render() {
    return (
      <View>
        <Image source={this.props.img}/>
    </View>)
  }
}


export default TestImage