import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /* borderColor: 'blue',
        borderWidth: 2, */
    },
    containerResultados: {
        flex: 1,
        /* borderWidth: 2, */
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImagen: {
        flex: 1,
        // borderWidth: 2,
        margin: 20,
        flexGrow: 0.5
    },
    containerAciertos: {
        flex: 1,
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        //margin: 10
    },
    textAciertos: {
        fontSize: 25,
        fontFamily: 'Merriweather-Regular',
        margin: 5,
        textDecorationLine: 'underline',
        color: 'black'
    },
    textPuntos: {
        fontSize: 35,
        fontFamily: 'Merriweather-Regular',
        marginTop: 10,
        color: 'black'
    },
    containerLeyenda: {
        flex: 1,
        //borderWidth: 2,
        flexGrow: 0.6,
        justifyContent: 'center',
        margin: 5,

    },
    textLeyenda: {
        fontSize: 20,
        fontFamily: 'Merriweather-Regular',
        color: 'black',
        alignItems: 'center',
        textAlign: 'center'
    },
    containerBotones:
    {
        flex: 1,
        //borderWidth: 2,
        flexGrow: 0.4,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    }
});
