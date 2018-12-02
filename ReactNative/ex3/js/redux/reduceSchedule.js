import {GOT_DAY1} from './actionSchedule'

const initState = {
  day: 1,
  schedules: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_DAY1:
      const {schedules} = action
      console.log(`reducer schedule = ${JSON.stringify(schedules)}`)
      return {schedules}
    default:
      return state
  }
}