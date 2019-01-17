import { GOT_DAY1 } from './actionSchedule'

const initState = {
  day1: {},
  day2: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_DAY1:
      let { payload } = action
      return payload
    default:
      return state
  }
}