import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{}}>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    height: '100%',
  },
});
