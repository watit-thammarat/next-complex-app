import { LOGIN, LOGOUT, LOGIN_REQUEST, LOGOUT_REQUEST } from './types';

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password }
});

export const authenticateUser = token => ({
  type: LOGIN,
  payload: token
});

export const unauthenticateUser = () => ({ type: LOGOUT });

export const logout = () => ({ type: LOGOUT_REQUEST });
