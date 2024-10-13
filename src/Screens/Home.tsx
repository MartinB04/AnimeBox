import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';

export const Home = () => {
  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style= {stylesAppTheme.formContainer}>
        <Text>Kakakaa
            Hoome Bv
        </Text>

        
      </View>
    </ScrollView>
  )
}
