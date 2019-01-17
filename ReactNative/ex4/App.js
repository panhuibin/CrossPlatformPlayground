// =========== 1. ex4 ===========
import React from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {RendererProvider as FelaProvider, ThemeProvider} from 'react-fela'
import {createRenderer} from 'fela-native'
import {SixTheme} from "./js/theme/SixTheme";
import Routes from './js/core/Routes'
import store from './js/redux/store'

const renderer = createRenderer()

export default () => (
  <FelaProvider renderer={renderer}>
    <ThemeProvider theme={SixTheme}>
      <ReduxProvider store={store}>
        <Routes/>
      </ReduxProvider>
    </ThemeProvider>
  </FelaProvider>
)

// =========== 2. fela demo ===========
// import React from 'react'
// import {RendererProvider} from 'react-fela'
// import {createRenderer} from 'fela-native'
// import FelaDemo from "./js/screen/FelaDemo";
//
// const render = createRenderer()
//
// export default () => (
//   <RendererProvider renderer={render}>
//     <FelaDemo/>
//   </RendererProvider>
// )

