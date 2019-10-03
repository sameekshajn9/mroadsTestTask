import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootSaga from '../sagas';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  sagaMiddleware.run(rootSaga);
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store);
  return {store, persistor};
};
