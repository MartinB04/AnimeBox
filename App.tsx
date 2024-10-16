import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LogIn } from './src/Screens/LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';
import { UserProvider } from './src/Components/UserContext';
import { AnimeProvider } from './src/Components/AnimeContext';
import React from 'react';

export default function App() {
  return (
    <UserProvider>
      <AnimeProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AnimeProvider>
    </UserProvider>
  );
}
