import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button, Spinner, Text, Title,
} from 'native-base';
import { CreditCardInput } from 'react-native-input-credit-card';
import * as PaymentsActions from '../reducers/payments';
import * as UserActions from '../reducers/user';
import LoginOrRegister from '../components/loginOrRegister';

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validCardDetails: false,
      cardDetails: null,
    };
  }

  onCardInputChange = (creditCardForm) => {
    this.setState({
      validCardDetails: creditCardForm.valid,
      cardDetails: creditCardForm.values,
    });
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps = (newProps) => {
    if (this.props.paying && newProps.paymentConfirmed) {
      this.props.navigation.navigate('PaymentConfirmation');
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          paddingTop: 10,
        }}
      >
        {this.props.cart.length > 0 && !this.props.user && (
          <LoginOrRegister
            login={this.props.login}
            register={this.props.register}
            logout={this.props.logout}
            loading={this.props.loading}
            error={this.props.error}
          />
        )}

        {this.props.cart.length > 0 && this.props.user && (
          <View>
            <Title
              style={{
                margin: 10,
                color: 'black',
                alignSelf: 'center',
              }}
            >
              Paying: $
              {this.props.cart.reduce(
                (sum, p) => sum + p.price * p.quantity,
                0,
              )}
            </Title>
            <CreditCardInput
              onChange={this.onCardInputChange}
            />
            <Button
              block
              style={{ margin: 20 }}
              onPress={() => this.props.pay(
                this.props.user,
                this.props.cart,
                this.state.cardDetails,
              )}
              disabled={!this.state.validCardDetails}
            >
              <Text>Pay now</Text>
            </Button>
            {this.props.paying && <Spinner />}
          </View>
        )}

        {this.props.cart.length > 0 && this.props.error && (
          <Text
            style={{
              alignSelf: 'center',
              color: 'red',
              position: 'absolute',
              bottom: 10,
            }}
          >
            {this.props.error}
          </Text>
        )}

        {this.props.cart.length === 0 && (
          <Text style={{ alignSelf: 'center', margin: 30 }}>
            There are no products in the cart
          </Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    cart: state.productsReducer.cart,
    loading: state.userReducer.loading,
    paying: state.paymentsReducer.loading,
    paymentConfirmed:
      state.paymentsReducer.paymentConfirmed,
    error:
      state.paymentsReducer.error
      || state.userReducer.error,
  };
}

function mapStateActionsToProps(dispatch) {
  return bindActionCreators(
    { ...PaymentsActions, ...UserActions },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(Payment);

Payment.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  pay: PropTypes.func.isRequired,
  paying: PropTypes.bool,
  register: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
};

Payment.defaultProps = {
  cart: [],
  error: null,
  loading: false,
  paying: false,
  user: null,
};
