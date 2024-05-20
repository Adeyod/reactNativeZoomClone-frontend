// AppWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const AppWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default AppWrapper;
