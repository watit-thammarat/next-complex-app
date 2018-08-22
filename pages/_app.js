import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';

import makeStore from '../src/store';
import { getToken } from '../src/services/auth';
import { authenticateUser } from '../src/store/actions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const token = getToken(ctx.req);
    if (token) {
      ctx.store.dispatch(authenticateUser(token));
    }
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
