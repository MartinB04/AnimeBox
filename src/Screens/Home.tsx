import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';
import Ionicons from '@expo/vector-icons/Ionicons';


export const Home = () => {
  return (
    <ScrollView style={stylesAppTheme.scrollViewStyle}>
      <View style= {stylesAppTheme.mainContainer}>
        <Text>Kakakaa
            Hoome Bv
            <Ionicons name='people-outline'/>
            <Ionicons name='people'/>
            <Ionicons name='person'/>
            
            
        </Text>

        
      </View>
    </ScrollView>
  )
}
