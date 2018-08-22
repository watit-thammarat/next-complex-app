import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../src/components/Header';
import requireAuth from '../src/hoc/requireAuth';
import classes from '../scss/styles.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className={classes.example}>Home Page</h1>
        <p>isAutenticated: {this.props.auth.isAuthenticated.toString()}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(requireAuth(Home));
