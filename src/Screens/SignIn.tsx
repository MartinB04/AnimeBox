import React from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SignIn = () => {
    const Registrar = () => {
    };

    return (
        <View>
            <TextInput style={styles.textInput} placeholder='Username' />
            <TextInput style={styles.textInput} placeholder='Password' />
            <TextInput style={styles.textInput} placeholder='Foto perfil' />
            <TextInput style={styles.textInput} placeholder='Name' />
            <TextInput style={styles.textInput} placeholder='Telefono' />
            <TextInput style={styles.textInput} placeholder='Email' />
            <TouchableOpacity onPress={() => { Registrar }}>
                <Text>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,

    }
});