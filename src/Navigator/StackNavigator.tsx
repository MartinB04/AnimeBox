import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogIn } from '../Screens/LogIn';
import { SignIn } from '../Screens/SignIn';


 export type StackNavigatorRoot = {
   /*  DrawerNavigator: undefined, */
    LogIn: undefined,
    SignIn: undefined,
}
 
const Stack = createStackNavigator<StackNavigatorRoot>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='LogIn'
    
    >
      <Stack.Screen name="LogIn" options={{title: "Iniciar Sesion"}} component={LogIn} />
      <Stack.Screen name="SignIn" options={{title: "Registrar usuario"}} component={SignIn} />

    </Stack.Navigator>
  );
}