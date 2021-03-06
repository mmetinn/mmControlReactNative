/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { store } from './src/redux/store';

import { Provider } from 'react-redux'
import Main from './src/Main'

const App = () => {
  return (
    <Provider store={store}>
        <Main />
      </Provider>

  );
};


export default App;
