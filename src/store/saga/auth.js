import { put, call } from 'redux-saga/effects';

import { authenticateUser, unauthenticateUser } from '../actions';
import {
  saveTokenToStorage,
  removeTokenFromStorage
} from '../../services/auth';

const authenticate = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { token: 'abcd1234' } });
    }, 300);
  });
};

export function* loginSaga({ payload }) {
  const { email, password } = payload;
  const { data } = yield call(authenticate, email, password);
  saveTokenToStorage(data.token);
  yield put(authenticateUser(data.token));
}

export function* logoutSata() {
  removeTokenFromStorage();
  yield put(unauthenticateUser());
}
