import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Router } from '../../routes';
import redirect from '../services/redirect';

export default ChildComponent => {
  class Auth extends Component {
    static async getInitialProps({ res, store }) {
      if (!store.getState().auth.isAuthenticated) {
        redirect('/auth/login', res);
      }
      return {};
    }

    componentMount() {
      this.redirectToLogin();
    }

    componentDidUpdate() {
      this.redirectToLogin();
    }

    redirectToLogin() {
      if (process.browser && !this.props.auth.isAuthenticated) {
        Router.pushRoute('/auth/login');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(Auth);
};
