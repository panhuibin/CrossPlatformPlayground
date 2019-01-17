import React from 'react'
import {FlatList} from 'react-native'
import {shallow} from "enzyme"
import ConnectedFirstScreen, {FirstScreen} from "../js/screen/FirstScreen"
import ReadedComponent from "../js/component/ReadedComponent";

describe('Test UI', () => {
  let wrapper
  let dispatchFun
  let open

  beforeEach(() => {
    open = [
      {img: null, title: '1', author: 'a', progress: '10%', length: "2h"},
      {img: null, title: '2', author: 'b', progress: '93%', length: "1h30min"}
    ]
    dispatchFun = jest.fn()
    let props = {
      dispatch: dispatchFun, open: open
    }
    wrapper = shallow(<FirstScreen {...props}/>)
  })

  test('exist one FlatList', () => {
    expect(wrapper.find(FlatList).length).toBe(1)
  })

  test('componentWillMount dispatch an event', ()=> {
    expect(dispatchFun).toBeCalled()
  })

  test('render item - returned value', () => {
    let item = wrapper.instance().renderItem(open[0])
    expect(item.type).toBe(ReadedComponent)
  })

  test('render item - props', () => {
    let data = {item: open[0]}
    let item = wrapper.instance().renderItem(data)
    expect(item.props).toEqual({data: open[0]})
  })
})


// describe('Test Redux + Screen', ()=> {
//   let initState = {reducerFirst: {opened: []}}
//   let mockStore = configMockStore()
//   let wrapper, store
//
//   beforeEach(()=> {
//     store = mockStore(initState)
//     // wrapper = shallow(<Provider store={store}><ConnectedFirstScreen/></Provider>)
//     //   .find(ConnectedFirstScreen)
//     wrapper = shallow(<ConnectedFirstScreen/>, {context: store})
//   })
//
//   test('check props is correct', () => {
//     store.dispatch(tryFirstPageInfo())
//     let action = store.getActions()
//     expect(action[0].type).toBe(TRY_FIRST_PAGE_INFO)
//   })
//   // TODO -> -> 我去除store.dispatch()这句, 测试就失败了. 但我们componentWillMount()里不是发了这个嘛?! 为什么会失败?
//
//   test('xxx', ()=> {
//     console.log(`(1) wrapper = ${wrapper.debug()}`)
//     expect(wrapper.find(FlatList).length).toBe(1)
//   })
//
//   // test('check has one <ConnectedFirstScreen/> child', ()=> {
//   //   expect(wrapper.find(ConnectedFirstScreen).length).toBe(1)
//   // })
//   //
//   // test('check has one <FlatList/> child', ()=> {
//   //   let screen = wrapper.dive()
//   //   // let t2 = shallow(screen.getElement())
//   //   let tmp = screen.children().at(0)
//   //   console.log(`(3). ${screen.debug()}`)
//   //   console.log(`(4). ${tmp.debug()}`)
//   //   // expect(screen.find(FlatList).length).toBe(1)
//   // })
//
//   // screen结果是:
//   //     <ContextConsumer>
//   //       [function bound renderWrappedComponent]
//   //     </ContextConsumer>
//   //
//   // tmp的结果是:
//   //     (4). [function bound renderWrappedComponent]
//
// })
