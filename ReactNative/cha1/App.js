import React from 'react'
import {Provider} from 'react-redux'
import Routes from './js/core/Routes'
import store from './js/redux/store'

export default () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
)