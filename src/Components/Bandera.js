import { useEffect, useState } from 'react/cjs/react.development';

import BanderaHorizontal from './BanderaHorizontal';
import BanderaVertical from './BanderaVertical';
import React from "react";
import { View } from 'react-native';
import { generateRandomIntegerInRange } from '../Utils/functions/funciones'
import { styles } from '../Styles/styles_Bandera';

const Bandera = ({ tipo }) => {

    const [tipoBandera, setTipoBandera] = useState(tipo);
    const [index, setIndex] = useState(generateRandomIntegerInRange(0, 11));

    const cambiarTipoDeBandera = () => {
        setTipoBandera(generateRandomIntegerInRange(0, 1))
        setIndex(generateRandomIntegerInRange(0, 11));
    }

    useEffect(() => {

        let timer = setInterval(() => cambiarTipoDeBandera(), 2000);;

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <View style={styles.containerBandera}>

            {
                tipoBandera === 0 ? <BanderaHorizontal index={index} /> : <BanderaVertical index={index} />
            }

        </View >
    )
}

export default Bandera;

