import {call, put, takeEvery} from "redux-saga/effects";
import {gotFirstPageInfo, TRY_FIRST_PAGE_INFO} from "./reducerFirst";
import {API_FIRST_PAGE, API_ID_DAY1, API_ID_DAY2, API_ID_LOGIN, doFetch} from "../core/HttpEngine";
import {loginSucc, TRY_LOGIN} from "./reducerLogin";
import {gotSchedule, TRY_SCHEDULE} from "./reducerSchedule";


const rootSaga = function* () {
  yield takeEvery(TRY_FIRST_PAGE_INFO, fetchFirstPage);
  yield takeEvery(TRY_LOGIN, tryLogin);
  yield takeEvery(TRY_SCHEDULE, fetchSchedule);
}

const fetchSchedule = function* () {
  try {
    const rawResp1 = yield call(doFetch, API_ID_DAY1)
    const resp1 = yield rawResp1.json()
    const rawResp2 = yield call(doFetch, API_ID_DAY2)
    const resp2 = yield rawResp2.json()
    const newAction = gotSchedule({day1: resp1, day2: resp2})
    yield put(newAction)
  } catch (err) {
    console.log(`saga.fetch schedule error = ${err}`)
  }
}

export const fetchFirstPage = function* () {
  try {
    const rawResp = yield call(doFetch, API_FIRST_PAGE)
    const resp = yield rawResp.json()
    const newAction = gotFirstPageInfo(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryGetFirstPageInfo error = ${err}`)
  }
}

const tryLogin = function* () {
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

export default rootSaga