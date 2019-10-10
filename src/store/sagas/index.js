// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas

// Imports: Redux Sagas
import {watchAddUser} from 'screens/login/redux/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchAddUser)]);
}
