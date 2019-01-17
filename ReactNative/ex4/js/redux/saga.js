import {takeEvery, call, put} from "redux-saga/effects";
import {TRY_LOGIN, loginSucc} from "./actionSession";
import {API_CHALLENGE1_PAGE1, API_FIRST_PAGE, API_ID_DAY1, API_ID_DAY2, API_ID_LOGIN} from '../core/apiConstants'
import { gotDay1, TRY_SCHEDULE_DAY1 } from './actionSchedule'
import {gotFirstPageInfo, TRY_FIRST_PAGE_INFO} from "./actionFirst";
import {onGotChallenge1Page, TRY_CHALLENGE1_PAGE} from "./reduxChanllengeOne";
import {doFetch} from "../core/HttpEngine";

const rootSaga = function* () {
  yield takeEvery(TRY_LOGIN, tryLogin)
  yield takeEvery(TRY_SCHEDULE_DAY1, tryDay1)
  yield takeEvery(TRY_FIRST_PAGE_INFO, tryGetFirstPageInfo)
  yield takeEvery(TRY_CHALLENGE1_PAGE, tryFetchChallenge1)
}

const tryLogin = function* (action) {
  try {
    console.log(`szw saga tryLogin()`)
    const rawResp = yield call(doFetch, API_ID_LOGIN)
    const resp = yield rawResp.json()
    const newAction = loginSucc(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryLogin error = ${err}`)
  }
}

const tryDay1 = function*(action) {
  try {
    const rawResp1 = yield call(doFetch, API_ID_DAY1)
    const resp1 = yield rawResp1.json()
    const rawResp2 = yield call(doFetch, API_ID_DAY2)
    const resp2 = yield rawResp2.json()
    const newAction = gotDay1({day1: resp1, day2: resp2})
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryDay1 error = ${err}`)
  }
}

const tryGetFirstPageInfo = function*(aciton) {
  try{
    const rawResp = yield call(doFetch, API_FIRST_PAGE)
    const resp = yield rawResp.json()
    const newAction = gotFirstPageInfo(resp)
    yield put(newAction)
  } catch(err){
    console.log(`saga.tryGetFirstPageInfo error = ${err}`)
  }
}

export const tryFetchChallenge1 = function* (action) {
  try{
    const rawResp = yield call(doFetch, API_CHALLENGE1_PAGE1)
    const resp = yield rawResp.json()
    const newAction = onGotChallenge1Page(resp)
    yield put(newAction)
  }catch (err) {
    console.log(`saga.tryFetchChallenge1 error = ${err}`)
  }
}


export default rootSaga

