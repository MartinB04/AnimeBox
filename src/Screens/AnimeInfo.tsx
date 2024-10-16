import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext } from '../Components/AnimeContext';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../Components/UserContext'


export const AnimeInfo = () => {
    const context = useContext(AnimeContext);
    
    if (!context) {
        throw new Error('AnimeContext must be used within an AnimeProvider');
    }
    
    const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido

    const { animeData } = context;

    console.log(userData?.username, animeData?.id_anime)

    if (!animeData) {
        return (
            <View>
                <Text>No se encontraron datos del anime.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>

                <View style={stylesAppTheme.animeDataTopView}>
                    <Image source={{ uri: animeData.imagen }} style={stylesAppTheme.animeCellImage} />
                    <View style={stylesAppTheme.titleAnimeContainer}>
                        <Text style={stylesAppTheme.titleAnimeScreen}>{animeData.nombre}</Text>
                    </View>
                </View>
                <View style={stylesAppTheme.animeDataBarView}>
                    {<TouchableOpacity style={stylesAppTheme.infoBar}>
                        <Text style={stylesAppTheme.textInfoAnime}>Favorito: </Text>
                        <Ionicons name='heart' size={25} color={"red"} />

                    </TouchableOpacity>}
                    <View style={stylesAppTheme.infoBar}>
                        <Text style={stylesAppTheme.textInfoAnime}>Popularidad: </Text>
                        <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.popularidad}</Text>
                    </View>

                    <View style={stylesAppTheme.infoBar}>
                        <Text style={stylesAppTheme.textInfoAnime}>Episodios: </Text>
                        <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.total_episodios}</Text>

                    </View>
                </View>

                <View style={stylesAppTheme.animeDataView}>
                    <Text style={stylesAppTheme.textInfoAnime}>Sinopsis: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.sinopsis}</Text>

                    <Text style={stylesAppTheme.textInfoAnime}>Precuela: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.precuela}</Text>

                    <Text style={stylesAppTheme.textInfoAnime}>Secuela: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.secuela}</Text>

                    <Text style={stylesAppTheme.textInfoAnime}>Estatus emision: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.status_emision}</Text>

                    <Text style={stylesAppTheme.textInfoAnime}>Tipo: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.tipo_contenido}</Text>
                </View>
            </View>
        </ScrollView>
    );
};