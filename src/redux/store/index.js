import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = reduxSaga();

const store = () => {
  return {
    ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(rootSaga)
  };
}
export default store
