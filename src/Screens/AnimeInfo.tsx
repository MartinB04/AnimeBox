import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext } from '../Components/AnimeContext';
import { ScrollView } from 'react-native-gesture-handler';

export const AnimeInfo = () => {
    const context = useContext(AnimeContext);

    if (!context) {
        throw new Error('AnimeContext must be used within an AnimeProvider');
    }

    const { animeData } = context;

    // Agregar un console.log para verificar los datos
    console.log('Datos del anime:', animeData); // Verifica que los datos se están pasando correctamente

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
                    {<View style={stylesAppTheme.infoBar}>
                        <Text style={stylesAppTheme.textInfoAnime}>Tipo: </Text>
                        <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>{animeData.tipo_contenido}</Text>
                    </View>}
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
                </View>
            </View>
        </ScrollView>
    );
};