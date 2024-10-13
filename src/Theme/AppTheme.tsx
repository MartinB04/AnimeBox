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
        backgroundColor: "red",
    },
    pickerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})