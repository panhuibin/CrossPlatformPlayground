import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import randomColor from 'randomcolor'
import {FirstPageRespponseItem} from "../../redux/reducerFirst";

interface Props {
  data: FirstPageRespponseItem;
}

class ReadComponent extends React.Component<Props> {
  state = {}

  render() {
    let {img, title, author, progress, length} = this.props.data
    let color = randomColor()
    return (
      <View style={styles.root}>
        <View style={[styles.topBg, {backgroundColor: color}]}/>
        <Image style={styles.cover} source={{uri: img}}/>
        <Text style={[styles.centerText, {marginTop: 32, fontSize: 17}]}>{title}</Text>
        <Text style={[styles.centerText, {marginTop: 6, fontSize: 15, color: '#424242'}]}>{author}</Text>
        <Text style={[styles.centerText, {marginTop: 4, fontSize: 15, color: '#757575'}]}>{progress} Read
          | {length}</Text>
        <Image style={styles.icDownload} source={require('../../../assets/ic_download.png')}/>
        <Image style={styles.icMoreDots} source={require('../../../assets/ic_more_vertical.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 270,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: 'white'
  },
  topBg: {
    height: 155,
  },
  cover: {
    width: 105,
    height: 125,
    position: 'absolute',
    backgroundColor: '#00f',
    alignSelf: 'center',
    top: '21%'
  },
  centerText: {
    alignSelf: 'center',
  },
  icMoreDots: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 20,
    height: 20,
    top: '60%',
    right: 6
  },
  icDownload: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '3%',
    right: 6
  }
})


export default ReadComponent