
import React from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Root from './components/Root';


const Main = () => {
  return (
    
      <View style={styles.continer}>
        <StatusBar style={styles.statusBar_} />        
        <Root />
      </View>  

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

export default Main;
