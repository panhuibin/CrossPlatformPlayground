import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastPrice } from '../components/Text'

import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../actions/currencies'

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  }
  
  // componentWillMount() is deprecated since React 16.3.0
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getInitialConversion())
  }
  
  
  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor,
    } = this.props
    
    let quotePrice = '...'  // 默认显示为"..."
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2)
    }
    
    return (
      <Container backgroundColor={primaryColor}>
        {/* 这里看样式, 是Status不在Container的水平/垂直都居中的限制的, 可能是StatusBar的特殊性  */}
        <StatusBar translucent={false} barStyle="light-content"/>
        <Header onPress={this.handleOptionsPress}/>
        
        {/*KeyboardAvoidingView.behavior:  padding, height, position*/}
        <KeyboardAvoidingView behavior="padding">
          <Logo/>
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuotoCurrency}
            value={quotePrice}
            editable={false}
          />
          <LastPrice
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quotePrice}
            conversionRate={conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
  
  handlePressBaseCurrency = () => {
    const { navigation } = this.props
    navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' })
    // 相当于this.porops.navigation.navigate('', {})
  }
  handlePressQuotoCurrency = () => {
    const { navigation } = this.props
    navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' })
  }
  handleChangeText = text => {
    const { dispatch } = this.props
    dispatch(changeCurrencyAmount(text))
  }
  handleSwapCurrency = () => {
    const { dispatch } = this.props
    dispatch(swapCurrency())
  }
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options')
  }
  
}

const mapStateToProps = (state) => {
  // console.log(`szw Home state->prop() : ${JSON.stringify(state)}`)
  const { baseCurrency, quoteCurrency } = state.currencies
  const conversionSelector = state.currencies.conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor,
  }
}

export default connect(mapStateToProps)(Home)
