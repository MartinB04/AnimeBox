import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RegisterUser } from './RegisterUser';
import { stylesAppTheme } from '../Theme/AppTheme';
import { UserContext } from '../Components/UserContext';
import { login_script } from '../Const/UrlConfig';
import { loginUser } from '../Services/Api';

export const LogIn = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setUsername('');
      setPassword('');
    }, [])
  );

  const navegacion = () => {
    navigation.navigate("BottomTabNavigator");
  }
  const { setUserData } = useContext(UserContext) || { setUserData: () => { } }; // Maneja el caso de que el contexto no esté definido

  const IniciarSesion = async () => {
    try {
      // Llamamos a la función `loginUser` que está en `api.ts`
      const data = await loginUser(username, password);

      if (data == "0") {
        Alert.alert("Error", "Credenciales incorrectas");
      } else {
        // Creamos un objeto con los datos de usuario
        const userData = {
          username: data.id_usuario,
          password: data.contrasenia,
          name: data.nombre,
          phoneNumber: data.telefono,
          email: data.email,
          profilePhoto: data.imagen_perfil,
        };

        // Guardamos los datos en el contexto de usuario
        setUserData(userData);
        navegacion(); // Navegamos a la siguiente pantalla
      }

    } catch (error) {
      console.warn('Error during login:', error);
    }
  };

  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style={stylesAppTheme.formContainer}>

        <Text style={stylesAppTheme.title}>Animebox</Text>

        <TextInput style={stylesAppTheme.textInput} placeholder='Username' value={username} onChangeText={setUsername} />
        <TextInput style={stylesAppTheme.textInput} placeholder='Password' value={password} onChangeText={setPassword} />

        <TouchableOpacity style={stylesAppTheme.button} onPress={IniciarSesion}>
          <Text style={stylesAppTheme.textButton}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesAppTheme.buttonLink} onPress={() => { navigation.navigate("RegisterUser"); }}>
          <Text style={stylesAppTheme.textLink}>Soy nuevo, quiero registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
