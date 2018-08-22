import { LOGIN, LOGOUT } from '../actions/types';

export const INITIAL_STATE = {
  isAuthenticated: false,
  token: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, token: payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
};
