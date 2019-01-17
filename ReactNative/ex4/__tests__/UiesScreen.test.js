import renderer from 'react-test-renderer'
import React from 'react'
import {Text, Button, Image} from 'react-native'
import UiesScreen from "../js/screen/UiesScreen";
import {shallow, mount} from "enzyme";
import TestImage from "../js/component/TestImage";

describe('test Ui Screen', () => {
  test('mount', () => {
    const wrapper = mount(<UiesScreen/>)
  })
  test('check has one <Text/> child', ()=> {
    const wrapper = shallow(<UiesScreen/>)
    expect(wrapper.find(Text).length).toBe(1)
  })

  test('check text in screen', () => {
    const wrapper = shallow(<UiesScreen title="san" imageName={null} onPress={null}/>)
    expect(wrapper.instance().props.title).toBe('san')
  })

  test('check the click event: approach 1', ()=>{
    let num = 0
    let _press = () => num++
    const wrapper = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    wrapper.simulate('press')
    expect(num).toBe(1)
  })

  test('check the click event: approach 2', ()=>{
    let _press = jest.fn()
    const wrapper = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    wrapper.simulate('press')
    expect(_press).toBeCalled()
  })

  test('check set state/props methods', ()=>{
    let _press = jest.fn()
    const wrapper = shallow(<UiesScreen/>)
    wrapper.setProps({title: "23", imageName: null, onPress: _press})

    let textView = wrapper.find(Text).getElement()  //=> {"key":null,"ref":null,"props":{"children":"23"},"_owner":null,"_store":{}}
    expect(textView.props.children).toBe('23')
  })

  test('check the method to get state', ()=> {
    let _press = jest.fn()
    const wrapper = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)
    expect(wrapper.state()).toEqual({num: 10})
    // 或是用 " expect(wrapper.state('num')).toEqual(10) "
  })

  test('check the simulate method', ()=> {
    let _press = jest.fn()
    const wrapper = shallow(<UiesScreen title="san" imageName={null} onPress={_press}/>)

    wrapper.find(Button).simulate('kiss')
    expect(wrapper.state('num')).toEqual(13)
  })

  test('check has one <Image/> child', ()=> {
    const wrapper = shallow(<UiesScreen/>)
    // console.log("dive() : " + wrapper.debug())

    expect(wrapper.find(TestImage).dive().find(Image).length).toBe(1)
  })
})