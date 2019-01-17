import React from 'react'
import Routes from './src/core/Routes'
import {Provider as ReactProvider} from 'react-redux'
import store from './src/redux/store'

export default () => (
  <ReactProvider store={store}>
    <Routes/>
  </ReactProvider>
)