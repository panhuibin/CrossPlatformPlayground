import { GOT_FIRST_PAGE_INFO } from './actionFirst'

const initState = {
  payload: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_FIRST_PAGE_INFO:
      let { payload } = action
      return payload
    default:
      return state
  }
}