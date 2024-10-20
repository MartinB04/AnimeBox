import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext, AnimeData } from '../Components/AnimeContext';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../Components/UserContext'
import { update_visualization_anime_script, visualization_anime_script } from '../Const/UrlConfig';
import RNPickerSelect from 'react-native-picker-select';

type VisualizationData = {
    favorito: boolean;
    status_vision: string;
};

/* type AnimeData = {
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
}; */

export const AnimeInfo = () => {
    const context = useContext(AnimeContext) || { animeData: null };
    const [statusVision, setStatusVision] = useState('');
    const { userData } = useContext(UserContext) || { userData: null }; // Maneja el caso de que el contexto no esté definido
    const { animeData } = context as { animeData: AnimeData | null }; // Asegurarse de que animeData puede ser null
    const [visualizationData, setVisualizationData] = useState<VisualizationData | null>({
        favorito: false, // o el valor que consideres apropiado
        status_vision: 'No marcado', // o el valor que desees
    });
    const [loading, setLoading] = useState(true);

    if (!context) {
        throw new Error('AnimeContext must be used within an AnimeProvider');
    }


    useEffect(() => {
        const fetchVisualizationData = async () => {
            try {
                if (userData?.username && animeData?.id_anime) {
                    const response = await fetch(`${visualization_anime_script}?id_usuario=${userData.username}&id_anime=${animeData.id_anime}`);
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

    const UpdateFavorite = async () => {
        try {
            // Invertir el valor de favorito localmente para actualizar la UI de inmediato
            const newFavoriteStatus = !visualizationData?.favorito;

            // Realizar la petición a la API para actualizar el valor en el backend
            const response = await fetch(
                `${update_visualization_anime_script}?id_usuario=${userData?.username}&id_anime=${animeData?.id_anime}&status_vision=${visualizationData?.status_vision}&favorito=${newFavoriteStatus}`
            );

            const data = await response.json();

            if (data == "0") {
                // Si hay un error con el usuario, puedes mostrar una alerta o manejarlo como desees
                console.log("Error al actualizar el estado de favorito");
            } else {
                // Si la actualización en el servidor fue exitosa, actualizar el estado localmente
                setVisualizationData((prevData) => {
                    if (prevData) {
                        return { ...prevData, favorito: newFavoriteStatus };
                    }
                    return prevData;
                });
            }
        } catch (error) {
            console.warn('Error al actualizar favorito:', error);
        }
    };


    const UpdateStatusVision = async (newStatusVision: string) => {
        try {
            // Actualizar el estado de statusVision antes de hacer la llamada a la API
            setStatusVision(newStatusVision);

            // Realizar la petición a la API para actualizar el valor en el backend
            const response = await fetch(
                `${update_visualization_anime_script}?id_usuario=${userData?.username}&id_anime=${animeData?.id_anime}&status_vision=${newStatusVision}&favorito=${visualizationData?.favorito}`
            );

            const data = await response.json();

            if (data === "0") {
                console.log("Error al actualizar el estado de visionado");
            } else {
                // Si la actualización en el servidor fue exitosa, actualizar el estado localmente
                setVisualizationData((prevData) => {
                    if (prevData) {
                        return { ...prevData, status_vision: newStatusVision };
                    }
                    return prevData;
                });
            }
        } catch (error) {
            console.warn('Error al actualizar estado de visualización:', error);
        }
    };

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
                    {<TouchableOpacity style={stylesAppTheme.infoBar} onPress={UpdateFavorite}>
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

                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecciona un estado...',
                            value: null, // Esto asegura que no se seleccione ninguna opción inicialmente
                            color: '#9EA0A4',
                        }}
                        onValueChange={(value) => UpdateStatusVision(value)} // Actualiza y llama a la API
                        value={visualizationData?.status_vision} // El valor actual del estado
                        items={[
                            { label: 'Viendo', value: 'Viendo' },
                            { label: 'Considerando', value: 'Considerando' },
                            { label: 'Pausado', value: 'Pausado' },
                            { label: 'Abandonado', value: 'Abandonado' },
                            { label: 'Finalizado', value: 'Finalizado' },
                        ]}
                    />
                </View>
            </View>
        </ScrollView>
    );
};