import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext, AnimeData } from '../Components/AnimeContext';
import { useNavigation } from '@react-navigation/native';
import { show_animes_script } from '../Const/UrlConfig';

export const UserAnimeList = () => {
    

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>

                <Text style={stylesAppTheme.titleScreen}>Mis animes</Text>

                

            </View>
        </ScrollView>
    )
}
