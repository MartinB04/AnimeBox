import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext, AnimeData } from '../Components/AnimeContext';
import { useNavigation } from '@react-navigation/native';

export const Anime = () => {
    const [animes, setAnimes] = useState<AnimeData[]>([]);
    const navigation = useNavigation();
    const { setAnimeData } = useContext(AnimeContext) || { setAnimeData: () => { } }; // Maneja el caso de que el contexto no esté definido

    // Función para obtener los datos desde la API
    const fetchAnimes = async () => {
        try {
            const response = await fetch('https://kuramadev.com/MostrarAnimes.php'); // Replace with your server URL
            const data = await response.json();
            setAnimes(data); // Save the fetched anime data in the state
        } catch (error) {
            console.error('Error fetching the data:', error);
        }
    };

    // Cargar los datos cuando el componente se monta
    useEffect(() => {
        fetchAnimes();
    }, []);

    // Navegar a la pantalla de información del anime
    const navigateToAnimeInfo = (anime: AnimeData) => {
        // Usa setTimeout para evitar la advertencia de actualización de estado en el render
        setTimeout(() => {
            setAnimeData(anime); // Establece los datos del anime en el contexto
            console.log(`Se presiona un anime: ${JSON.stringify(anime)}`); // Usa JSON.stringify para obtener una mejor representación del objeto
            navigation.navigate("AnimeInfo"); // Navega a la pantalla de información
        }, 0); // El timeout de 0 ms asegura que se ejecute después de la fase de renderizado
    };

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>

                <Text style={stylesAppTheme.titleScreen}>Animes</Text>

                <View style={stylesAppTheme.animeConteiner}>
                    {animes.map((anime, index) => (
                        <TouchableOpacity
                            style={stylesAppTheme.animeCell}
                            key={index}
                            onPress={() => navigateToAnimeInfo(anime)} // Asegúrate de pasar el anime aquí
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
