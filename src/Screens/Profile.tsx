import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { stylesAppTheme } from '../Theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../Components/UserContext'

export const Profile = () => {
  const dominio = 'https://kuramadev.com/uploads/';
  const navigation = useNavigation();
  const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido
  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style={stylesAppTheme.mainContainer}>
        <View >
          <Text style={stylesAppTheme.titleScreen}>Profile</Text>
          <Text style={stylesAppTheme.textLabel}>Nombre: {userData?.name}</Text>
          <Text style={stylesAppTheme.textLabel}>Username: {userData?.username}</Text>
          <Text style={stylesAppTheme.textLabel}>Password: {userData?.password}</Text>
          <Text style={stylesAppTheme.textLabel}>Email: {userData?.email}</Text>
          <Text style={stylesAppTheme.textLabel}>PhoneNumber: {userData?.phoneNumber}</Text>


          <Image style={stylesAppTheme.pickerImage} source={userData?.profilePhoto ? { uri: `${dominio}${userData?.profilePhoto}` } : require('../Images/userProfileImage.png')}
          />


          <TouchableOpacity style={stylesAppTheme.button} onPress={() => { navigation.navigate("LogIn"); }}>
            <Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
