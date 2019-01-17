import {LOGIN_SUCC} from './actionSession'

const initState = {
  succ: false,
  session: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCC:
      console.log(`szw reducer LOGIN_SUCC`)
      const {succ, session} = action
      return {succ: succ, session: session}
    default:
      return state
  }
}