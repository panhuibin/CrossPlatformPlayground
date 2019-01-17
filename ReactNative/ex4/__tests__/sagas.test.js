import {tryFetchChallenge1} from "../js/redux/saga";
import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers'
import {onGotChallenge1Page} from "../js/redux/reduxChanllengeOne";
import {doFetch} from "../js/core/HttpEngine";

test('fetch code1', () => {
  const result = `[{id: 23}, {id: 24}]`
  const stub = getMockResponse(result)
  const expected = onGotChallenge1Page(result)

  return expectSaga(tryFetchChallenge1, {})
    .provide([
      [matchers.call.fn(doFetch), stub]
    ])
    .put(expected)
    .run()
})

// utils method : add this to make sure the "rawResp.json()" works
function getMockResponse(content){
  return {
    json() {
      return content
    }
  }
}