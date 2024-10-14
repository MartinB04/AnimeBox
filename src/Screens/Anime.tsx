import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesAppTheme } from '../Theme/AppTheme';

export const Anime = () => {

    const listaNombres = [
        "Maou 2099",
        "Dragon Ball Daima",
        "Yarinaoshi Reijou wa Ryuutei Heika wo Kouryakuchuu",
        "Youkai Gakkou no Sensei Hajimemashita!",
        "Love Live! Superstar!! 3rd Season",
        "Seirei Gensouki 2",
        "Natsume Yuujinchou Shichi",
        "Haigakura",
        "Raise wa Tanin ga Ii",
        "Hoshifuru Oukoku no Nina",
        "Puniru wa Kawaii Slime",
        "Tsuma, Shougakusei ni Naru.",
        "Kimi wa Meido-sama.",
        "Party kara Tsuihou sareta Sono Chiyushi, Jitsu wa Saikyou ni Tsuki",
        "Ranma ½ (2024)",
        "Ao no Exorcist: Yuki no Hate-hen",
        "Chi.: Chikyuu no Undou ni Tsuite",
        "Goukon ni Ittara Onna ga Inakatta Hanashi",
        "Mahoutsukai ni Narenakatta Onnanoko no Hanashi",
        "The iDOLM@STER Shiny Colors 2nd Season",
        "Sword Art Online Alternative: Gun Gale Online II",
        "Kabushikigaisha Magi-Lumière",
        "Trillion Game",
        "Sayounara Ryuusei, Konnichiwa Jinsei",
    ]



    const listaImagenes = [
        "https://www3.animeflv.net/uploads/animes/covers/4082.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4081.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4080.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4079.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4078.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4077.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4076.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4075.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4074.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4073.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4072.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4071.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4070.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4069.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4068.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4067.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4066.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4065.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4064.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4063.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4062.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4061.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4060.jpg",
        "https://www3.animeflv.net/uploads/animes/covers/4059.jpg",
    
    ]

    return (
        <ScrollView style={stylesAppTheme.scrollViewStyle}>
            <View style={stylesAppTheme.mainContainer}>
                
                <Text style={stylesAppTheme.titleScreen}>Animes</Text>

                <View style={stylesAppTheme.animeConteiner}>
                    {listaImagenes.map((url, index) => (
                        <View style={stylesAppTheme.animeCell} key={index}>
                            <Image
                                source={{ uri: url }}
                                style={stylesAppTheme.animeCellImage}
                            />


                            {/* Itera sobre la lista de nombres y muestra cada nombre en un Text */}
                            {listaNombres[index] && (
                                <Text style={stylesAppTheme.animeCellText} numberOfLines={2} ellipsizeMode="tail">{listaNombres[index]}</Text>
                            )}
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    )
}
