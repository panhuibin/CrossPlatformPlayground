import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers'
import {
  FirstPageResponse,
  FirstPageRespponseItem,
  gotFirstPageInfo,
} from "../src/redux/reducerFirst";
import {doFetch} from "../src/core/HttpEngine";
import {fetchFirstPage} from "../src/redux/saga";


test('fetch code1', () => {
  const result = {opened: [{img: "", title:"one", author:"", progress:"", length:""}]}
  const stub = getMockResponse(result)
  const expected = gotFirstPageInfo(result)

  return expectSaga(fetchFirstPage)
    .provide([[matchers.call.fn(doFetch), stub]
    ])
    .put(expected)
    .run()
})

// utils method : add this to make sure the "rawResp.json()" works
function getMockResponse(content: FirstPageResponse) {
  return {
    json() {
      return content
    }
  }
}