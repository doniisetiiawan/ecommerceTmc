import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './screens/productList';

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
      </Stack.Navigator>
    </>
  );
}

export default ProductsNavigator;
