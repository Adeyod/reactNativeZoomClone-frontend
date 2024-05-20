import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const contactsMenuButtons = [
  {
    type: 'starred',
    name: 'Starred',
  },
  {
    type: 'contact',
    name: 'Adenike Tolu',
    photo: require('../assets/NIKE PICS 1.jpeg'),
  },
  {
    type: 'contact',
    name: 'Professor',
    photo: require('../assets/panel and professor.png'),
  },
  {
    type: 'contact',
    name: 'Debugger',
    photo: require('../assets/FIRST MUKBANG.png'),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == 'starred' ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <View>
              <Image source={contact.photo} style={styles.image} />
            </View>
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  starredIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
