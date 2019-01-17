import React from 'react'
import {View, StyleSheet, Text, FlatList, Image} from 'react-native'
import {randomColor} from 'randomcolor'

class FirstCarousel extends React.Component {
  state = {}

  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.more}>more</Text>
        <FlatList
          style={styles.recentRead}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem = ({item}) => {
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
    width: 110,
    height: 150,
    marginLeft: 10,
    marginRight: 10
  },
})

export default FirstCarousel