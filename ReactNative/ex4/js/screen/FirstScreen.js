import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";
import {tryFirstPageInfo} from "../redux/actionFirst";
import FirstCarousel from "../component/FirstCarousel";


export class FirstScreen extends Component {
  state = {
    listHeight: 0,
    listWidth: 0
  }

  componentDidMount() {
    console.log(`FirstScreen  componentDidMount()`)
    this.props.dispatch(tryFirstPageInfo())
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        {/*to make the FlatList's size not too big*/}
        <View style={{height: 286}}>
          <FlatList
            style={styles.recentRead}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.open}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={this.renderItem}
            ListEmptyComponent={this.renderEmptyView()}
            onLayout={e => this.setState({
              listHeight: e.nativeEvent.layout.height,
              listWidth: e.nativeEvent.layout.width
            })}
          />
        </View>

        <FirstCarousel title="Recommended"/>
        <FirstCarousel title="Popular Book"/>
        <FirstCarousel title="Recommended"/>

      </ScrollView>
    )
  }

  onPageChanged = (num) => {
    //TODO
  }

  renderItem = ({item}) => {
    return (
      <ReadedComponent data={item}/>
    )
  }

  renderEmptyView = () => {
    let {listHeight, listWidth} = this.state
    return (
      <View style={{
        height: listHeight,
        width: listWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}>
        <Image source={require('../../assets/ic_open_book.png')}/>
        <Text style={{fontSize: 21, marginTop: 10}}>You don't have any read book</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  recentRead: {},
  emptyView: {}
})

const mapStateToProps = (state) => {
  console.log(`szw FirstPage mapState2Props() : ${JSON.stringify(state)}`)
  // state is {"reduceFirst": { "opened": [ {}, {} ] }, ...}
  let {opened} = state.reduceFirst
  return {open: opened}
}

export default connect(mapStateToProps)(FirstScreen)
