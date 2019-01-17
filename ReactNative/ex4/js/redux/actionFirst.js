export const TRY_FIRST_PAGE_INFO = 'TRY_FIRST_PAGE_INFO'
export const tryFirstPageInfo = () => ({
  type: TRY_FIRST_PAGE_INFO,
})

export const GOT_FIRST_PAGE_INFO = 'GOT_FIRST_PAGE_INFO'
export const gotFirstPageInfo = resp => ({
  type: GOT_FIRST_PAGE_INFO,
  payload: resp
})
