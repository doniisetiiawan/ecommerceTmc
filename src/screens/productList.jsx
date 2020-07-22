import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Body,
  List,
  ListItem,
  Spinner,
  Text,
  Thumbnail,
} from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native';
import * as ProductActions from '../reducers/products';

class ProductList extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.props.fetchProducts();
  };

  onProductPress = (product) => {
    this.props.navigation.navigate('ProductDetail', {
      product,
    });
  };

  render() {
    return (
      <ScrollView>
        {this.props.loading && <Spinner />}
        <List>
          {this.props.products.map((p) => (
            <ListItem key={p.id}>
              <Thumbnail
                square
                height={80}
                source={{ uri: p.img }}
              />
              <Body>
                <TouchableOpacity
                  onPress={() => this.onProductPress(p)}
                >
                  <Text>{p.name}</Text>
                  <Text note>${p.price}</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.products || [],
    loading: state.productsReducer.loading,
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(ProductList);

ProductList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
