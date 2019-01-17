import React from 'react'
import {FlatList} from 'react-native'
import {shallow} from "enzyme"
import {ChallengeOneScreen as Screen, Layout, Sort} from "../../js/screen/ChallengeOneScreen";
import {CLEAR_CHA1, fetchChallengeOnePage, SORT_AZ_ACTION, SORT_ZA_ACTION} from "../../js/redux/reduxChanllengeOne";
import {fetchPageList} from "../../js/redux/reduxPages";

describe('test UI', () => {
  let wrapper
  let dispatchFun
  let pages = ["1", "2"]

  beforeEach(() => {
    dispatchFun = jest.fn()
    let props = {
      dispatch: dispatchFun,
      pages: pages,
      users: []
    }
    wrapper = shallow(<Screen {...props}/>)
  })

  test('fetch pages data at first', ()=>{
    let action = fetchPageList()
    expect(dispatchFun).toBeCalledWith(action)
  })

  test('FlatList exists', () => {
    let flatList = wrapper.find(FlatList)
    console.log(`list = ${flatList.debug()}`)
    expect(flatList.length).toBe(1)
    expect(flatList.prop('numColumns')).toBe(1)
  })


  test('FlatList -> GridView', () => {
    let screen = wrapper.instance()
    expect(wrapper.state('layoutIndex')).toBe(Layout.List)

    screen.clickLayout()
    expect(wrapper.state('layoutIndex')).toBe(Layout.Grid)
  })

  test('FlatList -> order', () => {
    let screen = wrapper.instance()
    expect(wrapper.state('sortIndex')).toBe(Sort.None)

    screen.clickSort()
    expect(dispatchFun).toBeCalledWith(SORT_AZ_ACTION)
    expect(wrapper.state('sortIndex')).toBe(Sort.AZ)
  })

  test('onReachEnd, current index++', () => {
    let screen = wrapper.instance()
    expect(screen.currentIndex).toBe(0)

    screen.onReachEnd()
    expect(screen.currentIndex).toBe(1)
  })

  test('reach end, then send action to redux', () => {
    let screen = wrapper.instance()
    screen.onReachEnd()

    let action = fetchChallengeOnePage("2", 1)
    expect(dispatchFun).toBeCalledWith(action)
  })

  test('unmounting will dispatch CLEAR_CHA1 action', () => {
    wrapper.unmount()
    expect(dispatchFun).toBeCalledWith({type: CLEAR_CHA1})
  })

})

// 最后没有测试的就只有 sort的其它分支(ZA, default), 以及mapStateToPrps方法了
