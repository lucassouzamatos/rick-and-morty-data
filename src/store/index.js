import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(reducers, compose(applyMiddleware(...middlewares), console.tron.createEnhancer()));

sagaMiddleware.run(sagas);

export default store;
