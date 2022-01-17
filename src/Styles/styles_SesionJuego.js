import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /*  borderWidth: 2,
         borderColor: 'blue', */

    },
    containerBandera: {
        flex: 1,
        /*  borderWidth: 2, */
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 5,
    },
    Bandera: {
        margin: 10
    },
    btnProximaBandera: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCantPreguntas: {
        flex: 0.1,
        /* borderWidth: 2, */
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCantPreguntas: {
        color: 'black',
        fontFamily: 'Merriweather-Regular',
        fontSize: 20
    },
    containerBotones: {
        flex: 1,
        /* borderWidth: 2, */
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOpcion: {
        margin: 10,
        width: 150
    },
    btnVolverHome: {
        flex: 0.3,
        alignItems: 'center',
        marginTop: 25
        /* justifyContent: 'flex-start', */
        /* borderWidth: 2, */
    }
});
