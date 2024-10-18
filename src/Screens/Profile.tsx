import React, { useContext } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { stylesAppTheme } from '../Theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../Components/UserContext'
import { LogIn } from './LogIn'
import { delete_user_script } from '../Const/UrlConfig'

export const Profile = () => {
  const dominio = 'https://kuramadev.com/uploads/';
  const navigation = useNavigation();
  const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido


  const navegacion = () => {
    navigation.navigate("LogIn");
  }


  const AlertDeleteUserProfile = () =>
    Alert.alert('Eliminación de Perfil', '¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.', [
      
      {text: 'Eliminar', onPress: () => EliminarPerfil()},
      {
        text: 'Cancel',
        /* onPress: () => console.log('Cancel Pressed'), */
        style: 'cancel',
      },
    ]);

  const EliminarPerfil = () => {
    fetch(`${delete_user_script}?username=${userData?.username}`)
      .then(response => response.text())
      .then(data => {
        console.log("Respuesta del servidor:", data); // Imprime la respuesta para depurar
        if (data.includes("Usuario eliminado con éxito")) {
          Alert.alert("Listo", "Usuario eliminado con éxito");
          navegacion();
        } else {
          Alert.alert("Error", "No se pudo eliminar el usuario. Intenta de nuevo.");
        }
      })
      .catch(error => {
        console.warn('Error:', error);
        Alert.alert("Error", "Hubo un problema al eliminar el perfil. Intenta más tarde.");
      });
  };


  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style={stylesAppTheme.mainContainer}>

        <Text style={stylesAppTheme.titleScreen}>Profile</Text>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Nombre: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.name}</Text>
        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Username: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.username}</Text>

        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Password: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.password}</Text>

        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Email: </Text>

          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.email}</Text>

        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>PhoneNumber: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.phoneNumber}</Text>

        </View>


        <Image style={stylesAppTheme.pickerImage} source={userData?.profilePhoto ? { uri: `${dominio}${userData?.profilePhoto}` } : require('../Images/userProfileImage.png')}
        />


        <TouchableOpacity style={stylesAppTheme.button} onPress={() => { navigation.navigate("LogIn"); }}>
          <Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesAppTheme.button} onPress={AlertDeleteUserProfile}>
          <Text style={stylesAppTheme.textButton}>Eliminar perfil</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}
