import React, {Component} from 'react'
import {View, StyleSheet, Text,} from 'react-native'
import {connect} from 'react-redux'
import RefreshListView from "../component/refresh_list/RefreshList";
import RefreshState from "../component/refresh_list/RefreshState";

class LoadingListScreen extends Component {
  state = {
    isTopRefreshing: false,
  }

  render() {
    return (
      <View style={styles.root}>
        <RefreshListView
          ref={(ref) => this.listView = ref}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({item}) => <Text style={{fontSize: 45}}> {item} </Text>}
          onHeaderRefresh={this.topRefresh}
          onFooterRefresh={this.bottomRefresh}
        />
      </View>
    )
  }

  topRefresh = () => {
    console.log(`szw refresh top`)
    setTimeout(() => this.listView.endRefreshing(RefreshState.Idle), 3000)
  }

  bottomRefresh = () => {
    console.log(`szw refresh bottom`)
    setTimeout(() => this.listView.endRefreshing(RefreshState.NoMoreData), 2000)

  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(LoadingListScreen)