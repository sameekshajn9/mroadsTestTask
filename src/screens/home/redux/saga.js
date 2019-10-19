// @flow
/* eslint-disable no-console */
import {takeLatest, call, put} from 'redux-saga/effects';
// import {NavigationActions} from 'react-navigation';
import {GET_ALL_SERVICES, GET_ALL_AVAILABLE_CITIES} from 'appstore/actions';
import {getServicesSuccess, getAvailableCitiesSuccess} from './action';
import {getAllServicesTypes, getAllAvailableCities} from '../../../api';

function* getTypes() {
  try {
    const result = yield call(getAllServicesTypes);
    yield put(getServicesSuccess(result.types));
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchGetServiceTypes(): any {
  yield takeLatest(GET_ALL_SERVICES.REQUEST, getTypes);
}

function* getAvailableCities() {
  try {
    const result = yield call(getAllAvailableCities);
    yield put(getAvailableCitiesSuccess(result.cities));
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchGetAvailableCities(): any {
  yield takeLatest(GET_ALL_AVAILABLE_CITIES.REQUEST, getAvailableCities);
}
