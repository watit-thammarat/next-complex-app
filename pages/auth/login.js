import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../src/store/actions';
import Header from '../../src/components/Header';
import requireNoAuth from '../../src/hoc/requireNoAuth';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = _ => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>
        <div>
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(requireNoAuth(Login));
