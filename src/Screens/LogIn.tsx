import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native';
import { SignIn } from './SignIn';
import { stylesAppTheme } from '../Theme/AppTheme';
import { UserContext } from '../Components/UserContext';


export const LogIn = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navegacion = () => {
    navigation.navigate("BottomTabNavigator");
  }
  const { setUserData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido
  const IniciarSesion = () => {
    //fetch('https://kuramadev.com/Registro.php?username=mudis2&password=Kazo13') 
    fetch(`https://kuramadev.com/IniciarSesion.php?username=${username}&password=${password}`)
      .then(response => response.json())
      .then(data => {
        if (data == "0") {
          // console.log("Usuario no encontrado"); 
          Alert.alert("Error", "Credenciales erroneas")
        }
        else {
          const userData = {
            username: data.id_usuario, // Asegúrate de que la respuesta contenga el username
            password: data.contrasenia,       // Suponiendo que la API devuelve el email
            name: data.nombre,
            phoneNumber: data.telefono,
            email: data.email,       // Y también el ID del usuario
            profilePhoto: data.imagen_perfil,
            // Agrega otras propiedades según la respuesta de la API
          }
          setUserData(userData);
          navegacion();
        }
      })

      .catch(error => {
        console.warn('error', error);
      });
  }

  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style={stylesAppTheme.formContainer}>

        <Text style={stylesAppTheme.title}>Animebox</Text>

        <TextInput style={stylesAppTheme.textInput} placeholder='Username' value={username} onChangeText={setUsername} />
        <TextInput style={stylesAppTheme.textInput} placeholder='Password' value={password} onChangeText={setPassword} />

        <TouchableOpacity style={stylesAppTheme.button} onPress={IniciarSesion}>
          <Text style={stylesAppTheme.textButton}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesAppTheme.buttonLink} onPress={() => { navigation.navigate("SignIn"); }}>
          <Text style={stylesAppTheme.textLink}>Soy nuevo, quiero registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
