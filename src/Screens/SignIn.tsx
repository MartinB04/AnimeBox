import React from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SignIn = () => {
   /*  const dominio = "1.0.2.2/proyecto/"; */
    const dominio = "10.0.2.2/proyecto/";


    const Registrar = () => {
        fetch('https://kuramadev.com/Registro.php?username=mudis2&password=Kazo13')
          .then(response => response.text())
          .then(data => {
            console.log('success', data);
          })
          .catch(error => {
            console.warn('error', error);
          });
      }

    return (
        <View>
            <TextInput style={styles.textInput} placeholder='Username' />
            <TextInput style={styles.textInput} placeholder='Password' />
            <TextInput style={styles.textInput} placeholder='Foto perfil' />
            <TextInput style={styles.textInput} placeholder='Name' />
            <TextInput style={styles.textInput} placeholder='Telefono' />
            <TextInput style={styles.textInput} placeholder='Email' />
            <TouchableOpacity onPress={Registrar}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,

    }
});