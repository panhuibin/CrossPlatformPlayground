import React from 'react'
import { Image, Animated, Text } from 'react-native'
import { shallow, mount } from "enzyme"
import { ActionSheetDemo } from "../js/screen/ActionSheetDemo"
import ActionSheet from "../js/component/action_sheet/ActionSheet";
describe('LoginScreen', () => {
    let wrapper
    let dispatchFun
    let open

    beforeEach(() => {

    })

    test('shallow', () => {
        wrapper = shallow(<ActionSheetDemo />)
        console.log(wrapper.debug())
        wrapper.find("[title='action sheet']").simulate('click')
        expect(wrapper.find(ActionSheet).state('isShowing')).toBe(true)

    })

    test.skip('mount', () => {
        wrapper = mount(<ActionSheetDemo />)
        console.log(wrapper.debug())
        wrapper.find("[title='action sheet']").simulate('click')
        console.log(wrapper.debug())
        wrapper.find("")
    })

})