import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /*  borderColor: 'red',
         borderWidth: 2, */
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005580'
    },
    titulo: {
        color: 'white',
        fontSize: 35,
        margin: 5,
        fontFamily: 'Merriweather-Regular'
    },
    subtitulo: {
        color: 'white',
        fontSize: 19,
        margin: 5,
        fontFamily: 'BebasNeue-Regular'
    }
});
