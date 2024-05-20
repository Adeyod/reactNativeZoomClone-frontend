import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import StartMeeting from '../components/StartMeeting';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

const MeetingRoomScreen = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const socketRef = useRef(null);

  console.log(activeUsers.length);

  const menuIcons = [
    {
      id: 1,
      name: 'microphone',
      title: 'Mute',
      customColor: '#efefef',
    },
    {
      id: 2,
      name: 'video-camera',
      title: 'Stop Video',
    },
    {
      id: 3,
      name: 'upload',
      title: 'Share Content',
    },
    {
      id: 4,
      name: 'group',
      title: 'Participants',
    },
  ];

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  const joinRoom = () => {
    if (socketRef.current) {
      __startCamera();
      socketRef.current.emit('join-room', { roomId: roomId, userName: name });
    } else {
      Alert.alert('Error', 'Socket is not initialized');
    }
  };

  useEffect(() => {
    socketRef.current = io(`http://192.168.43.47:3040`);

    socketRef.current.on('connect', () => {
      Alert.alert('Connection established');
      console.log('connection established');
    });

    socketRef.current.on('all-users', (users) => {
      setActiveUsers(users);
    });

    socketRef.current.on('user-connected', (userName) => {
      console.log('user connected:', userName);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={'front'}
                style={{
                  width: activeUsers.length <= 1 ? '100%' : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((user, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: 'white' }}>{user.userName}</Text>
                  </View>
                ))}
              <Text>{console.log(activeUsers[0])}</Text>
            </View>
          </View>

          <View style={styles.menu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color="#efefef" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        // Start meeting section
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoomScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  cameraContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  activeUsersContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  activeUserContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    width: Platform.OS === 'android' ? 187 : 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: 'white',
    marginTop: 10,
  },
});
