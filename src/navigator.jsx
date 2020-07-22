import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import ProductsNavigator from './productsNavigator';

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={ProductsNavigator}
            options={{ tabBarIcon: () => <Icon name="home" /> }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigator;
