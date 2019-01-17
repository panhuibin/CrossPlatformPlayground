import {fetchPageList, GOT_FETCH_PAGES, onGotPageList, TRY_FETCH_PAGES} from "../../js/redux/reduxPages";
import reducer from '../../js/redux/reduxPages'
import {CLEAR_CHA1} from "../../js/redux/reduxChanllengeOne";

test('[action] try fetch page lists', () => {
  let action = fetchPageList()
  expect(action).toEqual({type: TRY_FETCH_PAGES}) // 可以这样比对object
})

test('[action] after fetch page lists', () => {
  let action = onGotPageList({id: 2})
  expect(action).toEqual({type: GOT_FETCH_PAGES, payload: {id: 2}}) // 可以这样比对object
})

test('[reducer] after fetch page list', () => {
  let action = {type: GOT_FETCH_PAGES, payload: {id: 23}}
  let newState = reducer({}, action)
  expect(newState).toEqual({id: 23})
})

// try again, to test if the reducer is a pure function
test('[reducer] after fetch page list', () => {
  let action = {type: GOT_FETCH_PAGES, payload: {id: 1}}
  let newState = reducer({}, action)
  expect(newState).toEqual({id: 1})
})

test('[reducer] clear', () => {
  let action = {type: CLEAR_CHA1}
  let newState = reducer({}, action)
  expect(newState).toEqual({pages: []})
})
