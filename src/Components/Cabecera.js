import { Text, View } from 'react-native'

import React from "react";
import { styles } from '../Styles/styles_Cabecera'

const Cabecera = () => {

    return (<View style={styles.mainContainer}>
        <Text style={styles.titulo}>¡ TUTTI MUNDI !</Text>
        <Text style={styles.subtitulo}>¿ Cuánto conoces sobre las banderas del mundo ?</Text>
    </View>)
}

export default Cabecera;