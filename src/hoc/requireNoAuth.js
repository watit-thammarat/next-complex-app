import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Router } from '../../routes';
import redirect from '../services/redirect';

export default ChildComponent => {
  class NoAuth extends Component {
    static async getInitialProps({ res, store }) {
      if (store.getState().auth.isAuthenticated) {
        redirect('/', res);
      }
      return {};
    }

    componentWillReceiveProps(nextProps) {
      if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
        this.redirectToHome();
      }
    }

    redirectToHome() {
      if (process.browser) {
        Router.pushRoute('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(NoAuth);
};
