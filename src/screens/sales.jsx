/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Body, Button, Card, CardItem, Left, Right, Text, Title,
} from 'native-base';
import * as ProductActions from '../reducers/products';

class Sales extends Component {
  onBuyPress = (product) => {
    this.props.addProductToCart(product);
    setTimeout(
      () => this.props.navigation.navigate('MyCart', {
        product,
      }),
      0,
    );
  };

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        {this.props.products
          .filter((p) => p.discount)
          .map((product) => (
            <Card key={product.id}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{product.name}</Text>
                    <Text note>{product.author}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: product.img }}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                  }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Title>${product.price}</Title>
                </Left>
                <Body>
                  <Button
                    transparent
                    onPress={() => this.onBuyPress(product)}
                  >
                    <Text>Add to cart</Text>
                  </Button>
                </Body>
                <Right>
                  <Text style={{ color: 'red' }}>
                    {product.discount} off!
                  </Text>
                </Right>
              </CardItem>
            </Card>
          ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.products || [],
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(Sales);
