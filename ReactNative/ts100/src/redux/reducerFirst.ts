export const TRY_FIRST_PAGE_INFO = 'TRY_FIRST_PAGE_INFO'
export const tryFirstPageInfo = () => ({
  type: TRY_FIRST_PAGE_INFO,
})

export const GOT_FIRST_PAGE_INFO = 'GOT_FIRST_PAGE_INFO'
export const gotFirstPageInfo = (resp: FirstPageResponse) => ({
  type: GOT_FIRST_PAGE_INFO,
  payload: resp
})


const initState = {
  payload: {},
}

export default (state = initState, action: GotFirstPageDataAction) => {
  switch (action.type) {
    case GOT_FIRST_PAGE_INFO:
      let {payload} = action
      return payload
    default:
      return state
  }
}

export interface FirstPageResponse {
  opened: FirstPageRespponseItem[];
}

export interface FirstPageRespponseItem {
  img: string;
  title: string;
  author: string;
  progress: string;
  length: string
}

interface GotFirstPageDataAction {
  type: string;
  payload: FirstPageResponse;
}