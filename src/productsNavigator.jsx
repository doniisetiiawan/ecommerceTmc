import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './screens/productList';
import ProductDetail from './screens/productDetail';

const Stack = createStackNavigator();

function ProductsNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
    </>
  );
}

export default ProductsNavigator;
