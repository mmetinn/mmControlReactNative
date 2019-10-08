/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux'
import persist from './src/redux/config/store';
import Main from './src/Main'
import { PersistGate } from 'redux-persist/integration/react';

const persistStore = persist();


const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Main></Main>
      </PersistGate>
    </Provider>

  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#ffc312',
  },
  statusBar_: {
    backgroundColor: '#c79300',
  }
});

export default App;
