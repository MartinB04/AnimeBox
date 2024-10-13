import { StyleSheet } from "react-native"

export const stylesAppTheme = StyleSheet.create({

    scrollViewStyle: {
        paddingHorizontal: 10,
        backgroundColor: "#f0f6fc",

    },

    mainContainer: {
        width: "auto",
        /* marginHorizontal: 10, */
        backgroundColor: "red",
        height: "auto",

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
        /* backgroundColor: "red", */
        alignItems: "center",
    },
    textLink: {
        fontSize:17,
        fontWeight:"bold",
        textDecorationLine:"underline",
    }
})