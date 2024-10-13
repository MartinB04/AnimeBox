import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView , TouchableOpacity} from 'react-native-gesture-handler'
import { stylesAppTheme } from '../Theme/AppTheme'
import { useNavigation } from '@react-navigation/native'

export const Profile = () => {

    const navigation = useNavigation();
    return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style= {stylesAppTheme.formContainer}>
        <Text>Kakakaa
            Hoome Bv
        </Text>

        <TouchableOpacity style={stylesAppTheme.button} onPress={() => { navigation.navigate("LogIn"); }}>
          <Text style={stylesAppTheme.textButton}>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
