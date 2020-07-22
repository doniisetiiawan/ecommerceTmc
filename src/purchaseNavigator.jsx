import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCart from './screens/myCart';
import Payment from './screens/payment';

const Stack = createStackNavigator();

function PurchaseNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ title: 'My Cart' }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: 'My Cart' }}
        />
      </Stack.Navigator>
    </>
  );
}

export default PurchaseNavigator;
