// @flow
/* eslint-disable no-console */
import {takeLatest, call, put} from 'redux-saga/effects';
// import {NavigationActions} from 'react-navigation';
import {HANDLE_SIGNIN, signIn} from 'appstore/actions';
import {createUser} from '../../../api';

function* addUser({payload}) {
  console.log('payload', payload);
  try {
    const result = yield call(createUser, payload);
    // yield put(NavigationActions.navigate('Location'));
    yield put(signIn(result));
    console.log(result, 'result');
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchAddUser(): any {
  yield takeLatest(HANDLE_SIGNIN.REQUEST, addUser);
}
