import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from '../../../routes';
import { logout } from '../../store/actions';
import classes from './styles.scss';

class Header extends Component {
  logout = () => {
    this.props.logout();
  };

  renderLink() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return <button onClick={this.logout}>Logout</button>;
    } else {
      return (
        <Link route="/auth/login">
          <a>Login</a>
        </Link>
      );
    }
  }

  render() {
    return <div className={classes.container}>{this.renderLink()}</div>;
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { logout }
)(Header);
