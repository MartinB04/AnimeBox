import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { stylesAppTheme } from '../Theme/AppTheme';
import { AnimeContext } from '../Components/AnimeContext';

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
        <View style={stylesAppTheme.mainContainer}>
            <Text style={stylesAppTheme.titleScreen}>{animeData.nombre}</Text>
            <Image source={{ uri: animeData.imagen }} style={stylesAppTheme.animeCellImage} />
            <Text>{animeData.sinopsis}</Text>
            {/* Agrega más detalles del anime según sea necesario */}
        </View>
    );
};