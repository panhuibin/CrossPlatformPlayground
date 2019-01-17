import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, FlatList, Text, View } from 'react-native'
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import { connect } from 'react-redux'
import {
  changeBaseCurrency, changeQuoteCurrency,
} from '../actions/currencies'


class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }
  
  handlePress = (currency) => {
    const { navigation, dispatch } = this.props
    const { type } = navigation.state.params
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency))
    } else {
      dispatch(changeQuoteCurrency(currency))
    }
    
    navigation.goBack(null)
  }
  
  render() {
    const {baseCurrency, quoteCurrency, navigation} = this.props
    let comparisonCurrency = baseCurrency
    if(navigation.state.params.type === 'quote'){
      comparisonCurrency = quoteCurrency
    }
    
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content"/>
        
        {/* renderItem中的完整参数是: {item, index. separator}. 只用其一, 所以要加个{} */}
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
  
}


const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
})


export default connect(mapStateToProps)(CurrencyList)
