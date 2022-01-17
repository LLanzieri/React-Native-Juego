import { Text, View } from 'react-native';

import { Banderas } from '../Utils/constants/Banderas'
import React from "react";
import { styles } from '../Styles/styles_BanderaVertical';
import { useState } from 'react/cjs/react.development';

const BanderaDefault = () => {

    const [bandera, setBandera] = useState(Banderas.banderaDefault);
    const [pais, setPais] = useState(bandera.pais);
    const [linea1, setLinea1] = useState(bandera.linea1);
    const [linea2, setLinea2] = useState(bandera.linea2);
    const [linea3, setLinea3] = useState(bandera.linea3);

    return (
        <View style={styles.containerBandera}>
            <View style={[styles.linea1, { backgroundColor: linea1 }]}>
                <Text></Text>
            </View>
            <View style={[styles.linea2, { backgroundColor: linea2 }]}>
                <Text></Text>
            </View>
            <View style={[styles.linea3, { backgroundColor: linea3 }]}>
                <Text></Text>
            </View>
        </View>
    )
}

export default BanderaDefault;