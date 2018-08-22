import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer, { INITIAL_STATE } from './reducer';
import { watchAuth } from './saga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = INITIAL_STATE, options) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );
  sagaMiddleware.run(watchAuth);
  return store;
};
