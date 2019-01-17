import {CLEAR_CHA1} from "./reduxChanllengeOne";

export const TRY_FETCH_PAGES = 'TRY_FETCH_PAGES'
export const fetchPageList = () => ({
  type: TRY_FETCH_PAGES
})

export const GOT_FETCH_PAGES = 'GOT_FETCH_PAGES'
export const onGotPageList = resp => ({
  type: GOT_FETCH_PAGES,
  payload: resp
})

const initState = {
  pages: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_FETCH_PAGES:
      let {payload} = action
      return payload
    case CLEAR_CHA1:
      console.log(`redux pages`)
      return initState
    default:
      return state
  }
}

