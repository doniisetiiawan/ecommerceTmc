/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import Navigator from './src/navigator';
import paymentsReducer from './src/reducers/payments';
import productsReducer from './src/reducers/products';
import userReducer from './src/reducers/user';

const store = createStore(
  combineReducers({
    paymentsReducer,
    productsReducer,
    userReducer,
  }),
  applyMiddleware(thunk),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
}
