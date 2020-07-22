import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './login';
import Register from './register';

class LoginOrRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'login',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}
      >
        {this.state.display === 'login' && (
          <Login
            login={this.props.login}
            changeToRegister={() => this.setState({ display: 'register' })}
            loading={this.props.loading}
            error={this.props.error}
          />
        )}

        {this.state.display === 'register' && (
          <Register
            register={this.props.register}
            changeToLogin={() => this.setState({ display: 'login' })}
            loading={this.props.loading}
            error={this.props.error}
          />
        )}
      </View>
    );
  }
}

export default LoginOrRegister;

LoginOrRegister.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

LoginOrRegister.defaultProps = {
  error: null,
  loading: false,
};
