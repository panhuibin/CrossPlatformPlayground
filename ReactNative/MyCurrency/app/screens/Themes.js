import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { ListItem, Separator } from '../components/List'
import ExtStyles from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import { changePrimaryColor } from '../actions/theme'

const styles = ExtStyles.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Themes extends Component {
  // 不加这个propTypes, 就会报错: "undefined : 'this.props.navigation' "
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }
  
  handlePressTheme = (color) => {
    const { navigation, dispatch } = this.props
    
    dispatch(changePrimaryColor(color))
    
    navigation.goBack()
    
    // 下面的代码会有一种clear_top的效果. Theme与栈中的Option没有了. 根据是这样子回到home页后,再按back, 就退出应用了
    // navigation.navigate('Home')
    
  }
  
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem
          text="Blue"
          selected
          checkmark={false}
          onPress={() => this.handlePressTheme(styles.$blue)}
          bg={styles.$blue}
        />
        <Separator/>
        <ListItem
          text="Orange"
          selected
          checkmark={true}
          onPress={() => this.handlePressTheme(styles.$orange)}
          bg={styles.$orange}
        />
        <Separator/>
        <ListItem
          text="Purple"
          selected
          checkmark={false}
          onPress={() => this.handlePressTheme(styles.$purple)}
          bg={styles.$purple}
        />
      </ScrollView>
    )
  }
  
}

export default connect()(Themes)