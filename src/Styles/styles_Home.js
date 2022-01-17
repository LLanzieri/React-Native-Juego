import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /* borderColor: 'pink',
        borderWidth: 2, */
    },
    containerBandera: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexGrow: 0.8,
        /* borderColor: 'black',
        borderWidth: 2, */
    },
    ultimoContainer: {
        flex: 1,
        flexGrow: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        /* borderWidth: 2,
        borderColor: '#5200cc' */
    },
    ultimoParrafo: {
        fontSize: 20,
        marginVertical: 20,
        //marginBottom: 20,
        fontFamily: 'BebasNeue-Regular',
        textDecorationLine: 'underline',
        color: 'black'

    },

});
