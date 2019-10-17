// @flow
/* eslint-disable no-console */
import {takeLatest, call, put} from 'redux-saga/effects';
// import {NavigationActions} from 'react-navigation';
import {GET_ALL_SERVICES} from 'appstore/actions';
import {getServicesSuccess} from './action';
import {getAllServices} from '../../../api';

function* getTypes({payload}) {
  console.log('payload', payload);
  try {
    const result = yield call(getAllServices, payload);
    // yield put(NavigationActions.navigate('Location'));
    console.log(result, 'result');
    yield put(getServicesSuccess(result));
  } catch (exception) {
    console.log(exception, 'exceptionasasa');
  }
}

export function* watchGetServiceTypes(): any {
  yield takeLatest(GET_ALL_SERVICES, getTypes);
}
