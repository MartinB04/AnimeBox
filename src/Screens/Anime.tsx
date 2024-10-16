import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';


interface Anime {
    id_anime: number;
    nombre: string;
    sinopsis: string;
    precuela: string;
    secuela: string;
    status_emision: string;
    tipo_contenido: string;
    popularidad: number;
    imagen: string;
    total_episodios: number;
}


export const Anime = () => {

    const [animes, setAnimes] = useState<Anime[]>([]);

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

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>

                <Text style={stylesAppTheme.titleScreen}>Animes</Text>

                <View style={stylesAppTheme.animeConteiner}>
                    {animes.map((anime, index) => (
                        <View style={stylesAppTheme.animeCell} key={index}>
                            <Image
                                source={{ uri: anime.imagen }} // Anime image
                                style={stylesAppTheme.animeCellImage}
                            />
                            <Text style={stylesAppTheme.animeCellText} numberOfLines={2} ellipsizeMode="tail">
                                {anime.nombre} {/* Anime name */}
                            </Text>
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    )
}
