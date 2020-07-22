/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Badge,
  Button,
  ListItem,
  Text,
  Title,
} from 'native-base';
import * as UserActions from '../reducers/user';
import * as ProductActions from '../reducers/products';
import * as PaymentsActions from '../reducers/payments';

class PaymentConfirmation extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.setState({ cart: this.props.cart }, () => {
      this.props.resetCart();
      this.props.resetPayment();
    });
  };

  continueShopping = () => {
    this.props.navigation.navigate('MyCart');
  };

  render() {
    return (
      <View>
        <Title
          style={{
            marginTop: 20,
            color: 'dark',
            alignSelf: 'center',
          }}
        >
          Your purchase is complete!
        </Title>
        <Text style={{ margin: 20 }}>
          Thank you for buying with us. We sent you an email
          with the confirmation details and an invoice. Here
          you can find a summary of your purchase:{' '}
        </Text>
        {this.state.cart.map((p, i) => (
          <ListItem
            key={i}
            style={{ justifyContent: 'space-between' }}
          >
            <Badge primary>
              <Text>{p.quantity}</Text>
            </Badge>
            <Text> {p.name}</Text>
            <Text> {p.price * p.quantity}</Text>
          </ListItem>
        ))}
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>
          Total: $
          {this.state.cart.reduce(
            (sum, p) => sum + p.price * p.quantity,
            0,
          )}
        </Text>
        <Button
          block
          style={{ margin: 20 }}
          onPress={this.continueShopping}
        >
          <Text>Continue Shopping</Text>
        </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.productsReducer.cart || [],
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(
    {
      ...PaymentsActions,
      ...ProductActions,
      ...UserActions,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(PaymentConfirmation);

PaymentConfirmation.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  resetCart: PropTypes.func.isRequired,
  resetPayment: PropTypes.func.isRequired,
};
