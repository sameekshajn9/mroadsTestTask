// @flow
/* eslint-disable no-console */
import {takeLatest, call, put} from 'redux-saga/effects';
// import {NavigationActions} from 'react-navigation';
import {HANDLE_SIGNIN, signIn} from 'appstore/actions';
import {createUser} from '../../../api';

function* addUser({payload}) {
  try {
    const result = yield call(createUser, payload);
    yield put(signIn(result));
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchAddUser(): any {
  yield takeLatest(HANDLE_SIGNIN.REQUEST, addUser);
}
