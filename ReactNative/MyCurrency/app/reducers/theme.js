import { CHANGE_PRIMARY_COLOR } from '../actions/theme'

const initState = {
  primaryColor: '#4f6d7a',
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return { ...state, primaryColor: action.color }
    default:
      return state
  }
}
