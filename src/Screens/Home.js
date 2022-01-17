import { Text, View } from 'react-native';

import Bandera from '../Components/Bandera'
import BotonCustom from '../Components/BotonCustom';
import Cabecera from "../Components/Cabecera";
import React from "react";
import { generateRandomIntegerInRange } from '../Utils/functions/funciones'
import { styles } from '../Styles/styles_Home'
import { useState } from 'react/cjs/react.development';

const Home = ({ cambiarPantallaSesionJuego }) => {

    const [randomTipoDebandera, setRandomTipoDeBandera] = useState(generateRandomIntegerInRange(0, 1))

    return (

        <View style={styles.mainContainer} >
            <Cabecera />

            <View style={styles.containerBandera}>
                <Bandera tipo={randomTipoDebandera} />
            </View>

            <View style={styles.ultimoContainer}>
                <Text style={styles.ultimoParrafo}>¡ Identificá la bandera de cada país y sumá puntos !</Text>
                <BotonCustom titulo="🎮 ¡ COMENZAR !" color={'#005580'} alPresionar={cambiarPantallaSesionJuego}></BotonCustom>

            </View>
        </View >

    )
}

export default Home;

