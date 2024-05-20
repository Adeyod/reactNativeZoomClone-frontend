import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Fontisto } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <TextInput
        style={styles.textSearchBar}
        placeholder="search"
        placeholderTextColor="#858585"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  textSearchBar: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 20,
  },
});
