import { Text, View } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';

import { Banderas } from '../Utils/constants/Banderas'
import React from "react";
import { styles } from '../Styles/styles_BanderaVertical';

const BanderaHorizontal = ({ index, setearBandera }) => {

    const [bandera, setBandera] = useState(Banderas.arrayBanderasVerticales[index]);
    const [pais, setPais] = useState(bandera.pais);
    const [linea1, setLinea1] = useState(bandera.linea1);
    const [linea2, setLinea2] = useState(bandera.linea2);
    const [linea3, setLinea3] = useState(bandera.linea3);

    useEffect(() => {
        if (setearBandera)
            setearBandera(bandera)
    }, []);

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

export default BanderaHorizontal;