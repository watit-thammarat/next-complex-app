import Cookie from 'js-cookie';
import cookieParser from 'cookieparser';

const TOKEN = 'token';

export const saveTokenToStorage = token => {
  localStorage.setItem(TOKEN, token);
  Cookie.set(TOKEN, token);
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem(TOKEN);
  Cookie.remove(TOKEN);
};

export const getToken = req => {
  let token;
  if (process.browser) {
    token = localStorage.getItem(TOKEN);
  } else if (req && req.headers.cookie) {
    const cookies = cookieParser.parse(req.headers.cookie);
    token = cookies[TOKEN];
  }
  return token || null;
};

export const isAuthenticated = req => {
  return !!getToken(req);
};
