import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';

export const SignIn = () => {
    /*  const dominio = "1.0.2.2/proyecto/"; */
    /* const dominio = "10.0.2.2/proyecto/"; */

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

    const Registrar = () => {
        /* fetch('https://kuramadev.com/Registro.php?username=mudis2&password=Kazo13') */
        fetch(`https://kuramadev.com/Registro.php?username=${username}&password=${password}`)
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
            <TextInput style={stylesAppTheme.textInput} placeholder='Username' value={username} onChangeText={setUsername}/>
            <TextInput style={stylesAppTheme.textInput} placeholder='Password' value={password} onChangeText={setPassword}/>
            <TextInput style={stylesAppTheme.textInput} placeholder='Email' />

            <TextInput style={stylesAppTheme.textInput} placeholder='Telefono' />
          
            <TextInput style={stylesAppTheme.textInput} placeholder='Foto perfil' />
            <TouchableOpacity style={stylesAppTheme.button} onPress={Registrar}>
                <Text style={stylesAppTheme.textButton}>Registrar</Text>
            </TouchableOpacity>

        </ScrollView>

    )
}