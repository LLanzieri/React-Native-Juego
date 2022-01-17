import { Image, Text, View } from 'react-native';

import BotonCustom from '../Components/BotonCustom';
import Cabecera from '../Components/Cabecera';
import React from "react";
import { styles } from '../Styles/styles_Resultados';

const mundoImage = require('../../assets/images/planeta-tierra.png');

const Resultados = ({ cambiarPantallaHome, cambiarPantallaSesionJuego, puntos }) => {

    let leyenda;
    if (puntos >= 0 && puntos <= 4) { leyenda = <Text>¡ Hay que reforzar esos conocimientos 😵 ! </Text> }
    if (puntos >= 5 && puntos <= 7) { leyenda = <Text>¡ Algunos errores, pero tienes un gran conocimiento 😄 !</Text> }
    if (puntos >= 8 && puntos <= 10) { leyenda = <Text>¡ Listo para viajar a cualquier país del mundo 🤩 !</Text> }

    return (<View style={styles.mainContainer}>
        <Cabecera />
        <View style={styles.containerResultados}>
            <View style={styles.containerImagen}>
                <Image source={mundoImage} />
            </View>

            <View style={styles.containerAciertos}>
                <Text style={styles.textAciertos}> ACIERTOS </Text>
                <Text style={styles.textPuntos}> {puntos} </Text>
            </View>

            <View style={styles.containerLeyenda}>
                <Text style={styles.textLeyenda}>{leyenda}</Text>
            </View>
        </View>
        <View style={styles.containerBotones}>
            <BotonCustom titulo={"🕹 JUGAR DE NUEVO"} color={'#005580'} alPresionar={() => cambiarPantallaSesionJuego()} />
            <BotonCustom titulo={"🏠 VOLVER"} color={'#005580'} alPresionar={() => cambiarPantallaHome()} />
        </View>

    </View >
    )
}

export default Resultados;