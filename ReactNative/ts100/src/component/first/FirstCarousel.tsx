import React from 'react'
import {View, StyleSheet, Text, FlatList, Image} from 'react-native'
import randomColor from 'randomcolor'

interface Props {
  title: string;
}

class FirstCarousel extends React.Component<Props> {
  state = {}

  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.more}>more</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem = ({item} : {item: any}) => {
    let color = randomColor()
    return (
      <View style={[styles.book, {backgroundColor: color}]}/>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    marginTop: 10
  },
  title: {
    fontSize: 16,
    color: '#D81B60',

  },
  more: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    fontSize: 15,
    color: '#0D47A1'
  },
  book: {
    width: 135,
    height: 190,
    marginLeft: 10,
    marginRight: 10
  },
})

export default FirstCarousel