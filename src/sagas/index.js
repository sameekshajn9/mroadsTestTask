// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas

// Imports: Redux Sagas
import {watchIncreaseCounter, watchDecreaseCounter} from './counter-saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchIncreaseCounter), fork(watchDecreaseCounter)]);
}
