export const TRY_LOGIN = 'TRY_LOGIN'
export const tryLogin = () => ({
  type: TRY_LOGIN
})

export const LOGIN_SUCC = 'LOGIN_SUCC'
export const loginSucc = resp => ({
  type: LOGIN_SUCC,
  ...resp
})