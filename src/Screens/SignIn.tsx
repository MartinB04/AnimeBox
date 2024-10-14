import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { Asset, launchImageLibrary } from 'react-native-image-picker';

export const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePhoto, setProfilePhoto] = useState<Asset | null>(null);


    const navigation = useNavigation();

    const Registrar = () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('nombre', name);
        formData.append('fechaRegistro', '1999-10-15');
        formData.append('telefono', phoneNumber);
        formData.append('email', email);

        if (profilePhoto && profilePhoto.uri) {
            const localUri = profilePhoto.uri;
            const filename = localUri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename || '');
            const type = match ? `image/${match[1]}` : `image`;

            formData.append('fotoPerfil', {
                uri: localUri,
                name: filename || 'image',
                type: type,
            } as any);  // Añadimos 'as any' para evitar el error de 'Blob'
        }

        fetch('https://kuramadev.com/Registro.php', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => response.text())
            .then(data => {
                console.log('success', data);
                Alert.alert('Registro exitoso', '¡Usuario registrado correctamente!');
            })
            .catch(error => {
                console.warn('error', error);
                Alert.alert('Error', 'Ocurrió un error durante el registro.');
            });
    };

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setProfilePhoto(response.assets[0]);
            }
        });
    };

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.formContainer}>
                <Text style={stylesAppTheme.title}>Animebox</Text>
                <TextInput style={stylesAppTheme.textInput} placeholder='Name' value={name} onChangeText={setName} />
                <TextInput style={stylesAppTheme.textInput} placeholder='Username' value={username} onChangeText={setUsername} />
                <TextInput style={stylesAppTheme.textInput} placeholder='Password' value={password} onChangeText={setPassword} />
                <TextInput style={stylesAppTheme.textInput} placeholder='Email' value={email} onChangeText={setEmail} />
                <TextInput style={stylesAppTheme.textInput} placeholder='Telefono' value={phoneNumber} onChangeText={setPhoneNumber} />

                <TouchableOpacity style={stylesAppTheme.touchaleOpacityImage} onPress={selectImage}>
                    {/* <Text style={stylesAppTheme.textButton}>Seleccionar Foto de Perfil</Text> */}
                    <Image style={stylesAppTheme.pickerImage} source={profilePhoto ? { uri: profilePhoto.uri } : require('../Images/userProfileImage.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={stylesAppTheme.button} onPress={Registrar}>
                    <Text style={stylesAppTheme.textButton}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesAppTheme.buttonLink} onPress={() => { navigation.navigate("LogIn"); }}>
                    <Text style={stylesAppTheme.textLink}>Iniciar sesion</Text>
                </TouchableOpacity>

            </View>

            {/* {profilePhoto && (
                <Image
                    source={{ uri: profilePhoto.uri }}
                    style={{ width: 100, height: 100, marginTop: 10 }}
                />
            )} */}
        </ScrollView>
    );
};
