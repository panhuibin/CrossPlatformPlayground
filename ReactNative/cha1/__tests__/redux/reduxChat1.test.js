import reducer, {
  fetchChallengeOnePage,
  onGotChallenge1Page,
  SORT_AZ_ACTION,
  TRY_CHALLENGE1_PAGE,
  originalUsers, CLEAR_CHA1, SORT_ZA_ACTION
} from "../../js/redux/reduxChanllengeOne";

beforeEach(() => {
  let clearAction = {type: CLEAR_CHA1}
  reducer({}, clearAction)
})

test('fetch page action', () => {
  let action = fetchChallengeOnePage(1, 'b')
  expect(action).toEqual({type: TRY_CHALLENGE1_PAGE, page: 1, index: 'b'})
})

test('fetch cha1 data originally, got a non-array, should have error', () => {
  let action = onGotChallenge1Page(23, 0)
  expect(() => reducer({}, action)).toThrow()
})

test('fetch cha1 data originally', () => {
  let action = onGotChallenge1Page([{id: 1}, {id: 2}], 0)
  let newState = reducer({}, action)
  expect(newState).toEqual({payload: [{id: 1}, {id: 2}], index: 0})
})

test('sort ascending', () => {
  let action1 = onGotChallenge1Page([{last_name: 'c'}, {last_name: 'ben'}], 0)
  reducer({}, action1)

  let action2 = {...SORT_AZ_ACTION}
  let state = reducer({}, action2)
  expect(state).toEqual({payload: [{last_name: 'ben'}, {last_name: 'c'}], index: 0})
})

test('sort descending', () => {
  let action1 = onGotChallenge1Page([{last_name: 'apple'}, {last_name: 'ben'}], 0)
  reducer({}, action1)

  let action2 = {...SORT_ZA_ACTION}
  let state = reducer({}, action2)
  expect(state).toEqual({payload: [{last_name: 'ben'}, {last_name: 'apple'}], index: 0})
})

test('clear data', () => {
  let clearAction = {type: CLEAR_CHA1}
  let state = reducer({}, clearAction)
  expect(state).toEqual({payload:[], index: 0})
})

// TODO "SORT_NONE" 与  "default" 情形就不测试了