import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';

export const SignIn = () => {
    /*  const dominio = "1.0.2.2/proyecto/"; */
    /* const dominio = "10.0.2.2/proyecto/"; */

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber]  = useState('');
const [profilePhoto, setProfilePhoto] = useState('');



    const Registrar = () => {
        /* fetch('https://kuramadev.com/Registro.php?username=mudis2&password=Kazo13') */
        fetch(`https://kuramadev.com/Registro.php?username=${username}&password=${password}&fotoPerfil=${profilePhoto}&nombre=${name}&fechaRegistro=1999-10-15&telefono=${phoneNumber}&email=${email}`)
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

            <TextInput style={stylesAppTheme.textInput} placeholder='Name' value={name} onChangeText={setName} />
            <TextInput style={stylesAppTheme.textInput} placeholder='Username' value={username} onChangeText={setUsername}/>
            <TextInput style={stylesAppTheme.textInput} placeholder='Password' value={password} onChangeText={setPassword}/>
            <TextInput style={stylesAppTheme.textInput} placeholder='Email' value={email} onChangeText={setEmail}/>

            <TextInput style={stylesAppTheme.textInput} placeholder='Telefono' value={phoneNumber} onChangeText={setPhoneNumber}/>
          
            <TextInput style={stylesAppTheme.textInput} placeholder='Foto perfil' value={profilePhoto} onChangeText={setProfilePhoto} />
            <TouchableOpacity style={stylesAppTheme.button} onPress={Registrar}>
                <Text style={stylesAppTheme.textButton}>Registrar</Text>
            </TouchableOpacity>

        </ScrollView>

    )
}