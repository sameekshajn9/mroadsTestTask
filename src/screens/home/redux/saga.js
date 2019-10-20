// @flow
/* eslint-disable no-console */
import {takeLatest, call, put} from 'redux-saga/effects';
// import {NavigationActions} from 'react-navigation';
import {
  GET_ALL_SERVICES_TYPES,
  GET_ALL_AVAILABLE_CITIES,
  GET_SERVICES,
} from 'appstore/actions';
import {
  getServiceTypesSuccess,
  getServicesSuccess,
  getAvailableCitiesSuccess,
} from './action';
import {
  getAllServicesTypes,
  getAllAvailableCities,
  getServices,
} from '../../../api';

function* getTypes() {
  try {
    const result = yield call(getAllServicesTypes);
    yield put(getServiceTypesSuccess(result.types));
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchGetServiceTypes(): any {
  yield takeLatest(GET_ALL_SERVICES_TYPES.REQUEST, getTypes);
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

function* getServicesSaga(data) {
  try {
    console.log(data.payload, 'payload');
    const result = yield call(getServices, {...data.payload});
    yield put(getServicesSuccess(result));
  } catch (exception) {
    console.log(exception, 'exception');
  }
}

export function* watchGetServices(): any {
  yield takeLatest(GET_SERVICES.REQUEST, getServicesSaga);
}
