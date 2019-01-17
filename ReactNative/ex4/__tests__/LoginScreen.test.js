import React from 'react'
import {Image, Animated, Text} from 'react-native'
import {shallow} from "enzyme"
import ConnectedLoginScreen, {LoginScreen} from "../js/screen/LoginScreen"

describe('LoginScreen', () => {
    let wrapper
    let dispatchFun
    let open
  
    beforeEach(() => {
      wrapper = shallow(<LoginScreen/>)
      console.log(wrapper.debug())
    })
  
    test('exist 3 Images', () => {
      expect(wrapper.find(Image).length).toBe(4)
      expect(wrapper.find(Animated.View).length).toBe(4)
      expect(wrapper.find(Text).length).toBe(4)
      wrapper.find()
    })

})