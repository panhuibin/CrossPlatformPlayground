import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducerFirst, {FirstPageResponse} from "./reducerFirst";
import reducerLogin, {LoginResponse} from "./reducerLogin";
import reducerSchedule, {ScheduleListResponse} from "./reducerSchedule";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reducerLogin, reducerFirst, reducerSchedule
})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;

export interface ReduxState {
  reducerLogin: LoginResponse;
  reducerFirst: FirstPageResponse;
  reducerSchedule: ScheduleListResponse;
}