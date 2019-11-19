import React from 'react';
import {fork, all} from 'redux-saga/effects';
import watchuserLogginCalled from './loginSaga';

export default function* rootSaga() {
  yield all([fork(watchuserLogginCalled)]);
  //   yield fork(watchuserLogginCalled);
}
