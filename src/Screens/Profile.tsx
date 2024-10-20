import React, { useContext, useState } from 'react'
import { View, Text, Image, Alert, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { stylesAppTheme } from '../Theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../Components/UserContext'
import { LogIn } from './LogIn'
import { delete_user_script, images_path, update_user_profile_script, user_profile_images_path } from '../Const/UrlConfig'
import { AlertDeleteUserProfile } from '../Notifications/Alerts'

export const Profile = () => {

  const navigation = useNavigation();
  const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido

  const [updateProfile, setUpdateProfile] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const navegacion = () => {
    navigation.navigate("LogIn");
  }


  const AlertUpdateProfile = () => {
    Alert.alert("Actualiza perfil", "Seguro que quieres actulizar el perfil?", [
      { text: "Actualizar", onPress: () => UpdateProfile() },
      { text: "Cancelar", style: 'cancel', onPress: ReiniciarDatos }
    ])
  }

  const UpdateProfile = () => {
    fetch(`${update_user_profile_script}?id_usuario=${userData?.username}&nombre=${name}&email=${email}&telefono=${phone}`)
      .then(response => response.json())
      .then(data => {
        if (data == "0") {
          // console.log("Usuario no encontrado"); 
          Alert.alert("Error", "No se pudo actualizar el perfil");
        }
        else {
          Alert.alert("Ok", "Perfil actualizado");
          setUpdateProfile(false);
        }


      })

      .catch(error => {
        console.warn('error', error);
      });
  }

  const ReiniciarDatos = () => {
    setName(userData?.name || '');
    setEmail(userData?.email || '');
    setPhone(userData?.phoneNumber || '');
    setUpdateProfile(false);
  }

  

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
          <Text style={stylesAppTheme.textLabel}>Username: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.username}</Text>

        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Password: </Text>
          <Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.password}</Text>

        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Nombre: </Text>
          {updateProfile ?
            (<TextInput style={stylesAppTheme.textInput} placeholder={userData?.name} value={name} onChangeText={setName} />) :
            (<Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.name}</Text>)
          }
        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Email: </Text>
          {updateProfile ?
            (<TextInput style={stylesAppTheme.textInput} placeholder={userData?.email} value={email} onChangeText={setEmail} />) :
            (<Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.email}</Text>)
          }
        </View>
        <View style={stylesAppTheme.rowProfile}>
          <Text style={stylesAppTheme.textLabel}>Phone: </Text>
          {updateProfile ?
            (<TextInput style={stylesAppTheme.textInput} placeholder={userData?.phoneNumber} value={phone} onChangeText={setPhone} />) :
            (<Text style={[stylesAppTheme.textLabel, stylesAppTheme.textLabelUserData]}>{userData?.phoneNumber}</Text>)
          }
        </View>

        <Image style={stylesAppTheme.pickerImage} source={userData?.profilePhoto ? { uri: `${user_profile_images_path}/${userData?.profilePhoto}` } : { uri: `${images_path}/userProfileImage.png` }}
        />

        {updateProfile ? (<TouchableOpacity style={stylesAppTheme.button} onPress={AlertUpdateProfile}>
          <Text style={stylesAppTheme.textButton}>Guardar cambios</Text>
        </TouchableOpacity>) :
          (<TouchableOpacity style={stylesAppTheme.button} onPress={() => setUpdateProfile(true)}>
            <Text style={stylesAppTheme.textButton}>Modificar Perfil</Text>
          </TouchableOpacity>)}

        <TouchableOpacity style={stylesAppTheme.button} onPress={() => { navigation.navigate("LogIn"); }}>
          <Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesAppTheme.button} onPress={() => AlertDeleteUserProfile (EliminarPerfil)}>
          <Text style={stylesAppTheme.textButton}>Eliminar perfil</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}
