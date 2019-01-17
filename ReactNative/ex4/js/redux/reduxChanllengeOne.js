export const TRY_CHALLENGE1_PAGE = 'TRY_CHALLENGE1_PAGE'
export const fetchChallengeOnePage = (page) => ({
  type: TRY_CHALLENGE1_PAGE,
  page
})

export const GOT_CHALLENGE1_PAGE = 'GOT_CHALLENGE1_PAGE'
export const onGotChallenge1Page = resp => ({
  type: GOT_CHALLENGE1_PAGE,
  payload: resp
})

export const SORT_AZ = "SORT_AZ"
export const SORT_AZ_ACTION = {type: SORT_AZ}

export const SORT_ZA = "SORT_ZA"
export const SORT_ZA_ACTION = {type: SORT_ZA}

export const SORT_NONE = "SORT_NONE"
export const SORT_NONE_ACTION = {type: SORT_NONE}

var originalUsers = [];  // save the original users data
const initState = []
export default (state = initState, action) => {
  switch (action.type) {
    case GOT_CHALLENGE1_PAGE:
      let { payload } = action
      originalUsers = payload // payload.slice() ?
      return payload
    case SORT_AZ:
      let usersAz = originalUsers.slice()
      usersAz.sort((a,b) => this.compareTwoStrings(a,b))
      return usersAz
    case SORT_ZA:
      let usersZa = originalUsers.slice()
      usersZa.sort((a,b) => this.compareTwoStrings(b,a))
      return usersZa
    case SORT_NONE:
      return originalUsers
    default:
      return state
  }
}

this.compareTwoStrings = function (a, b) {
  if (a.last_name === null) return 1;
  if (b.last_name === null) return -1;
  return a.last_name.localeCompare(b.last_name)
}

