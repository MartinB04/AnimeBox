import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'; 
import { SignIn } from './SignIn';

export const LogIn = () => {

const navigation = useNavigation();

  return (
    <View>
        
        <TextInput style={styles.textInput} placeholder='Email'/>
        <TextInput style={styles.textInput} placeholder='Password'/>

        <TouchableOpacity onPress={() => { navigation.navigate("SignIn"); }}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput:{
        height: 50,
        
    }
  });