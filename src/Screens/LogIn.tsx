import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native';
import { SignIn } from './SignIn';
import { stylesAppTheme } from '../Theme/AppTheme';
import { Home } from './Home';


export const LogIn = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style={stylesAppTheme.formContainer}>

        <Text style={stylesAppTheme.title}>Animebox</Text>

        <TextInput style={stylesAppTheme.textInput} placeholder='Email' />
        <TextInput style={stylesAppTheme.textInput} placeholder='Password' />

        <TouchableOpacity style={stylesAppTheme.button} onPress={() => { navigation.navigate("BottomTabNavigator"); }}>
          <Text style={stylesAppTheme.textButton}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesAppTheme.buttonLink} onPress={() => { navigation.navigate("SignIn"); }}>
          <Text style={stylesAppTheme.textLink}>Soy nuevo, quiero registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
