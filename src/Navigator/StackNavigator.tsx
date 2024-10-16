import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogIn } from '../Screens/LogIn';
import { SignIn } from '../Screens/SignIn';
import { Home } from '../Screens/Home';
import { BottomTabNavigator } from './BottomTabNavigator';
import { AnimeInfo } from '../Screens/AnimeInfo';


export type StackNavigatorRoot = {
  /*  DrawerNavigator: undefined, */
  LogIn: undefined,
  SignIn: undefined,
  Home: undefined,
  BottomTabNavigator: undefined,
  AnimeInfo: undefined,

}

const Stack = createStackNavigator<StackNavigatorRoot>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LogIn'

    >
      <Stack.Screen name="LogIn" options={{ headerShown: false }} component={LogIn} />
      <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
      <Stack.Screen name="BottomTabNavigator" options={{headerShown: false}} component={BottomTabNavigator} />
      <Stack.Screen name="AnimeInfo" options={{headerShown: false}} component={AnimeInfo} />

    </Stack.Navigator>
  );
}