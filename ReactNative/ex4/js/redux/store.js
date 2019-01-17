import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reduceSession from './reduceSession'
import reduceSchedule from './reduceSchedule'
import reduceFirst from "./reduceFirst";
import reduceChallenge1 from './reduxChanllengeOne'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  reduceSession, reduceSchedule, reduceFirst, reduceChallenge1
})
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(saga);

export default store;