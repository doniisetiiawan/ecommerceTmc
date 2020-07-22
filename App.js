/* eslint-disable react/jsx-filename-extension,react/style-prop-object,global-require */
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
import * as Font from 'expo-font';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
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

export default class App extends React.Component {
  componentDidMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}
