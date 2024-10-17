import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext } from '../Components/AnimeContext';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../Components/UserContext'

type VisualizationData = {
    favorito: boolean;
    status_vision: string;
};

type AnimeData = {
    id_anime: string;
    nombre: string;
    imagen: string;
    popularidad: string;
    total_episodios: number;
    sinopsis: string;
    precuela?: string;
    secuela?: string;
    status_emision: string;
    tipo_contenido: string;
};

export const AnimeInfo = () => {
    //const context = useContext(AnimeContext);
    const context = useContext(AnimeContext) || { animeData: null };

    if (!context) {
        throw new Error('AnimeContext must be used within an AnimeProvider');
    }

    //const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido
    const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido
    //const { animeData } = context;
    const { animeData } = context as { animeData: AnimeData | null }; // Asegurarse de que animeData puede ser null
    console.log(userData?.username, animeData?.id_anime)


    const [visualizationData, setVisualizationData] = useState<VisualizationData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVisualizationData = async () => {
            try {
                if (userData?.username && animeData?.id_anime) {
                    const response = await fetch(`https://kuramadev.com/Visualizacion.php?id_usuario=${userData.username}&id_anime=${animeData.id_anime}`);
                    const data = await response.json();
                    setVisualizationData(data);
                }
            } catch (error) {
                console.error('Error al obtener datos de visualización:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userData && animeData) {
            fetchVisualizationData();
        }
    }, [userData, animeData]);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }


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
                        <Ionicons name='heart' size={25} color={visualizationData?.favorito ? "red" : "grey"} />

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

                    <Text style={stylesAppTheme.textInfoAnime}>Estado: </Text>
                    <Text style={[stylesAppTheme.textInfoAnime, stylesAppTheme.textInfoAnimeData]}>
                        {visualizationData?.status_vision || 'No marcado'}</Text>
                </View>
            </View>
        </ScrollView>
    );
};