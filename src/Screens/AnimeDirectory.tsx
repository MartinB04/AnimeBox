import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext, ArrayAnimeData, AnimeDataId } from '../Components/AnimeContext';
import { useNavigation } from '@react-navigation/native';
import { show_animes_script } from '../Const/UrlConfig';

export const AnimeDirectory = () => {
    const [arrayAnimes, setArrayAnimes] = useState<ArrayAnimeData[]>([]);
    const [animeId, setAnimeId] = useState<AnimeDataId>();
    const navigation = useNavigation();
    const { setArrayAnimeData, setAnimeDataId } = useContext(AnimeContext) || { setArrayAnimeData: () => {}, setAnimeDataId: () => {} };


    // Función para obtener los datos desde la API
    const fetchAnimes = async () => {
        try {
            const response = await fetch(`${show_animes_script}`); // Replace with your server URL
            const data = await response.json();
            setArrayAnimes(data); // Save the fetched anime data in the state
            setArrayAnimeData(data); // Guarda la data en el contexto
        } catch (error) {
            console.error('Error fetching the data:', error);
        }
    };

    // Cargar los datos cuando el componente se monta
    useEffect(() => {
        fetchAnimes();
    }, []);

    useEffect(() => {
        console.log("Animes cargados:", arrayAnimes); // Muestra los animes después de que el estado ha sido actualizado
    }, [arrayAnimes]);

    // Navegar a la pantalla de información del anime
    const navigateToAnimeInfo = (animeId: number) => {
        // Usa setTimeout para evitar la advertencia de actualización de estado en el render
        setTimeout(() => {
            setAnimeDataId(arrayAnimes.find(anime => anime.id_anime === animeId) || null); // Establece los datos del anime en el contexto
            console.log(`Se presiona un anime: ${JSON.stringify(animeId)}`); // Usa JSON.stringify para obtener una mejor representación del objeto
            navigation.navigate("AnimeInfo"); // Navega a la pantalla de información
        }, 0); // El timeout de 0 ms asegura que se ejecute después de la fase de renderizado
    };

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>

                <Text style={stylesAppTheme.titleScreen}>Directorio de Animes</Text>

                <View style={stylesAppTheme.animeConteiner}>
                    {arrayAnimes.map((anime, index) => (
                        <TouchableOpacity
                            style={stylesAppTheme.animeCell}
                            key={index}
                            onPress={() => navigateToAnimeInfo(anime.id_anime)} // Asegúrate de pasar el anime aquí
                        >
                            <Image
                                source={{ uri: anime.imagen }} // Anime image
                                style={stylesAppTheme.animeCellImage}
                            />
                            <Text style={stylesAppTheme.animeCellText} numberOfLines={2} ellipsizeMode="tail">
                                {anime.nombre} {/* Anime name */}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        </ScrollView>
    )
}
