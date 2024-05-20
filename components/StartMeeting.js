import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StartMeeting = ({ joinRoom, name, roomId, setName, setRoomId }) => {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter name"
          placeholderTextColor="#767476"
        />
      </View>

      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          onChangeText={(text) => setRoomId(text)}
          placeholder="Enter name"
          placeholderTextColor="#767476"
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => joinRoom()}
          style={styles.startMeetingButton}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  startMeetingContainer: {},
  info: {
    width: '100%',
    backgroundColor: '#373538',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470DC',
    height: 50,
    borderRadius: 15,
  },
});
