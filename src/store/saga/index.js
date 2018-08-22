import { takeEvery, all } from 'redux-saga/effects';

import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/types';
import { loginSaga, logoutSata } from './auth';

export function* watchAuth() {
  yield all([
    takeEvery(LOGIN_REQUEST, loginSaga),
    takeEvery(LOGOUT_REQUEST, logoutSata)
  ]);
}
