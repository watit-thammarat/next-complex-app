import { combineReducers } from 'redux';

import auth, { INITIAL_STATE as AUTH_INITIAL_STATE } from './auth';

export const INITIAL_STATE = {
  auth: AUTH_INITIAL_STATE
};

export default combineReducers({
  auth
});
