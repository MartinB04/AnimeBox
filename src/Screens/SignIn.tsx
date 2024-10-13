import React from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';

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
        <ScrollView>

            <TextInput style={stylesAppTheme.textInput} placeholder='Name' />
            <TextInput style={stylesAppTheme.textInput} placeholder='Username' />
            <TextInput style={stylesAppTheme.textInput} placeholder='Password' />
            <TextInput style={stylesAppTheme.textInput} placeholder='Email' />

            <TextInput style={stylesAppTheme.textInput} placeholder='Telefono' />
          
            <TextInput style={stylesAppTheme.textInput} placeholder='Foto perfil' />
            <TouchableOpacity style={stylesAppTheme.button} onPress={Registrar}>
                <Text style={stylesAppTheme.textButton}>Registrar</Text>
            </TouchableOpacity>

        </ScrollView>

    )
}