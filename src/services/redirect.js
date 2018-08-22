import Router from 'next/router';

export default (path, res) => {
  if (process.browser) {
    Router.replace(path);
  } else {
    res.redirect(303, path);
  }
};
