import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingRoomScreen from './screens/MeetingRoomScreen';
import HomeScreen from './screens/HomeScreen';
import AppWrapper from './AppWrapper';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <AppWrapper>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Meeting"
            component={MeetingRoomScreen}
            options={{
              title: 'Start a Meeting',
              headerStyle: {
                backgroundColor: '#1c1c1c',
              },

              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </AppWrapper>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
