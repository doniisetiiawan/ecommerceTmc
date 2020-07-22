import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import ProductsNavigator from './productsNavigator';
import PurchaseNavigator from './purchaseNavigator';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: '#aaa',
          }}
        >
          <Tab.Screen
            name="Home"
            component={ProductsNavigator}
            options={{
              tabBarIcon: () => <Icon name="home" />,
            }}
          />
          <Tab.Screen
            name="MyCart"
            component={PurchaseNavigator}
            options={{
              tabBarIcon: () => <Icon name="cart" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigator;
