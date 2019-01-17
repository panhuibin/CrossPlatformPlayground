import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {fetchChallengeOnePage, SORT_AZ_ACTION, SORT_NONE_ACTION, SORT_ZA_ACTION} from "../redux/reduxChanllengeOne";

class ChallengeOneScreen extends Component {
  sortImages = [require('../../assets/ic_sort_az.png'), require('../../assets/ic_sort_za.png'), require('../../assets/ic_refresh.png')]
  layoutImages = [require('../../assets/ic_grid.png'), require('../../assets/ic_list.png')]

  state = {
    sortIndex: Sort.None,
    layoutIndex: Layout.List
  }

  componentDidMount() {
    this.props.dispatch(fetchChallengeOnePage(1))
  }

  render() {
    let sortImage = this.sortImages[this.state.sortIndex]
    let layoutImage = this.layoutImages[this.state.layoutIndex]
    let layoutColumnCount = this.state.layoutIndex === Layout.List ? 1 : 2
    let flatListKey = this.state.layoutIndex === Layout.List ? 'listChallenge1' : 'gridChallenge1'
    let renderItem = this.state.layoutIndex === Layout.List ? this.renderListItem : this.renderGridItem

    return (
      <View style={styles.root}>

        <View style={styles.headerContainer}>
          <Text style={{fontSize: 18, marginLeft: 20}}>All Users</Text>

          <TouchableOpacity style={[styles.iconRight, {right: 12}]} onPress={this.clickSort}>
            <Image source={sortImage}/>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconRight, {right: 52}]} onPress={this.clickLayout}>
            <Image style={styles.imgLayout} source={layoutImage}/>
          </TouchableOpacity>

        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.users}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={renderItem}
          numColumns={layoutColumnCount}
          key={flatListKey}
          ListEmptyComponent={(<Text> Empty </Text>)}
        />

      </View>
    )
  }

  renderGridItem = ({item, index}) => {
    // let avatarUri = item.avatar_large || item.avatar  //avatar_large竟有3000*2000这么大, 内存怕受不住啊
    return (
      <View style={[styles.itemInGrid, {backgroundColor: item.backgroundColor}]}>
        <Image style={styles.avatarInGrid} source={{uri: item.avatar}}/>
        <Text style={styles.nameInGrid} ellipsizeMode='tail' numberOfLines={1}>{index + 1}. {item.first_name} {item.last_name}</Text>
        <Text style={styles.emailInGrid} ellipsizeMode='tail' numberOfLines={1}>{item.email}</Text>
      </View>
    )
  }

  renderListItem = ({item, index}) => {
    return (
      <View style={[styles.itemInList, {backgroundColor: item.backgroundColor}]}>
        <Image style={styles.avatarInList} source={{uri: item.avatar}}/>
        <View style={styles.textContainerInList}>
          <Text style={styles.nameInList}>{index + 1}. {item.first_name} {item.last_name}</Text>
          <Text style={styles.emailInList}>{item.email}</Text>
        </View>
      </View>
    )
  }

  clickSort = () => {
    let newIndex = (this.state.sortIndex + 1) % 3
    if (newIndex === Sort.AZ) {
      this.props.dispatch(SORT_AZ_ACTION)
    } else if (newIndex === Sort.ZA) {
      this.props.dispatch(SORT_ZA_ACTION)
    } else {
      this.props.dispatch(SORT_NONE_ACTION)
    }
    this.setState({...this.state, sortIndex: newIndex})
  }


  clickLayout = () => {
    let newIndex = (this.state.layoutIndex + 1) % 2
    //TODO
    this.setState({...this.state, layoutIndex: newIndex})
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
  },
  iconRight: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },


  itemInGrid: {
    flex: 1,
    height: 220,
    alignItems: 'center'
  },
  avatarInGrid: {
    width: 140,
    height: 140,
    padding: 10,
    resizeMode: 'stretch',
  },
  nameInGrid: {
    fontSize: 17,
    marginTop: 12,
    marginLeft: 9,
    marginRight: 9,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInGrid: {
    fontSize: 14,
    marginTop: 6,
    marginLeft: 9,
    marginRight: 9,
    color: 'blue'
  },

  itemInList: {
    flexDirection: 'row'
  },
  avatarInList: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  textContainerInList: {
    flexDirection: 'column',
  },
  nameInList: {
    fontSize: 20,
    marginTop: 26,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInList: {
    fontSize: 17,
    marginTop: 9,
    color: 'blue'
  }
})

const mapStateToProps = (state) => {
  console.log(`szw challenge01 : state = ${JSON.stringify(state.reduceChallenge1.length)}`)
  return {
    users: state.reduceChallenge1
  }
}

export default connect(mapStateToProps)(ChallengeOneScreen)

const Layout = Object.freeze({
  List: 0,
  Grid: 1,
})

const Sort = Object.freeze({
  None: 0,
  AZ: 1,
  ZA: 2
})
