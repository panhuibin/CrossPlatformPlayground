import React from 'react'
import {FlatList} from 'react-native'
import {shallow, mount, dive} from "enzyme"
import ConnectedFirstScreen from "../js/screen/FirstScreen"
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux'
import {TRY_FIRST_PAGE_INFO} from '../js/redux/actionFirst'

jest.mock('ScrollView', () => {
  const RealComponent = require.requireActual('ScrollView');
  const React = require('React');
  class ScrollView extends React.Component {
    scrollTo() {
    }

    render() {
      return React.createElement('ScrollView', this.props, this.props.children);
    }
  }
  ScrollView.propTypes = RealComponent.propTypes;
  return ScrollView;
});

describe('Test Redux + Screen', ()=> {
  let store, wrapper
  const middlewares = []
  const mockStore = configureStore(middlewares)
  const storeStateMock = {reduceFirst: {opened: []}}

  beforeEach(()=> {
    store = mockStore(storeStateMock);
    //wrapper = mount(<Provider store={store}><ConnectedFirstScreen/></Provider>)
    shalloWrapper = shallow(<Provider store={store}><ConnectedFirstScreen/></Provider>)
  })

  test.skip('check props is correct', () => {
    console.log(wrapper.debug())
    let action = store.getActions()
    expect(action[0].type).toBe(TRY_FIRST_PAGE_INFO)
  })

  test.skip('find flat list', ()=> {
    expect(wrapper.find(FlatList).length).toBe(4)
  })

  test.skip('check has one <ConnectedFirstScreen/> child', ()=> {
    expect(wrapper.find(ConnectedFirstScreen).length).toBe(1)
  })
  
  test('check has one <FlatList/> child', ()=> {
    //console.log(shalloWrapper.debug())
    let screen = shalloWrapper.html()
    console.log(`(3). ${screen}`)
    console.log(`(3). ${shalloWrapper.debug()}`)
    let t2 = shallow(screen.getElement())
    let tmp = screen.children().at(0)
    console.log(`(4). ${tmp.debug()}`)
  })

  // screen结果是:
  //     <ContextConsumer>
  //       [function bound renderWrappedComponent]
  //     </ContextConsumer>
  
  // tmp的结果是:
  //     (4). [function bound renderWrappedComponent]

})