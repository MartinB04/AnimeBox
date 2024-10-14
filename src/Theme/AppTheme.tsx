import { StyleSheet } from "react-native"

export const colors = {
    primary: "#002959",
}

export const stylesAppTheme = StyleSheet.create({

    title: {
        marginHorizontal: 10,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: colors.primary,
    },
    titleScreen:{
        textAlign: "center",
        fontSize: 30,
        fontWeight:"bold",
        color: colors.primary,
    },

    scrollViewStyle: {
        paddingHorizontal: 10,
        backgroundColor: "#f0f6fc",

    },

    mainContainer: {
        width: "auto",
        /* marginHorizontal: 10, */
        backgroundColor: "skyblue",
        height: "auto",
        borderRadius:10,
        padding:10,

    },

    formContainer: {
        /*  backgroundColor: "yellow", */
    },

    textInput: {
        height: 50,
        backgroundColor: "white",
        marginHorizontal: 10,
        marginVertical: 5,
        fontSize: 20,
        paddingHorizontal: 20,
        fontStyle: "italic",
        borderRadius: 10,

    },

    button: {
        backgroundColor: "#3870ff",
        height: 50,
        alignItems: "center",
        justifyContent: "center",

        margin: 10,
        borderRadius: 25,
        marginHorizontal: 30,

    },

    textButton: {
        color: "white",
        fontSize: 18,
        letterSpacing: 3,
        textTransform: "uppercase",
        fontWeight: "bold",

    },

    buttonLink: {
        alignItems: "center",
    },
    textLink: {
        fontSize: 17,
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: colors.primary,
    },
    touchaleOpacityImage: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    },
    pickerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textLabel:{
        fontSize: 18,
        color: colors.primary,
    },
    animeConteiner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "100%",
        //backgroundColor: "red",
        justifyContent: "center",
    },
    animeCell:
    {
        //backgroundColor: "orange",
        padding: 0,
        margin:5,
        marginHorizontal: 3,
    },
    animeCellImage: {
        /* width: 105, */
        width: 100,
        height: 150,
        borderRadius: 10,

    },
    animeCellText:{
      textAlign: "center",  
      width:100,
      color: colors.primary
    },
})