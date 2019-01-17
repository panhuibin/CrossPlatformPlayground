import {expectSaga} from "redux-saga-test-plan";
import {tryFetchPageList} from "../../js/redux/saga";
import {onGotPageList} from "../../js/redux/reduxPages";
import {doFetch} from "../../js/core/HttpEngine";

import * as matchers from 'redux-saga-test-plan/matchers'

test('[saga] fetch pages', ()=>{
  let stubResp = `{pages: ["1", "2"]}`
  let stub = getMockResponse(stubResp)
  let stubAction = onGotPageList(stubResp)

  return expectSaga(tryFetchPageList, {})
    .provide([
      [matchers.call.fn(doFetch), stub]
    ])
    .put(stubAction)
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
