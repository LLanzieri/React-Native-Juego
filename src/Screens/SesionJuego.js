import { Text, View } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';

import BanderaDefault from '../Components/BanderaDefault';
import BanderaHorizontal from '../Components/BanderaHorizontal';
import BanderaVertical from '../Components/BanderaVertical';
import { Banderas } from '../Utils/constants/Banderas';
import BotonCustom from '../Components/BotonCustom';
import ContainerBotones from '../Components/ContainerBotones';
import React from "react";
import { generateRandomIntegerInRange } from '../Utils/functions/funciones'
import { styles } from '../Styles/styles_SesionJuego';

const SesionJuego = ({ cambiarPantallaHome, cambiarPantallaResultados, sumarPunto }) => {

    const [cambiarBandera, setCambiarBandera] = useState(2);
    const [index, setIndex] = useState(generateRandomIntegerInRange(0, 11));
    const [banderaElegida, setBanderaElegida] = useState({});
    const [tituloBandera, setTituloBandera] = useState(Banderas.arrayNombreBanderas[generateRandomIntegerInRange(0, 23)]);

    const [pais1, setPais1] = useState(Banderas.arrayNombreBanderas[generateRandomIntegerInRange(0, 7)]);
    const [pais2, setPais2] = useState(Banderas.arrayNombreBanderas[generateRandomIntegerInRange(8, 15)]);
    const [pais3, setPais3] = useState(Banderas.arrayNombreBanderas[generateRandomIntegerInRange(16, 23)]);

    const [cantRespuestas, setCantRespuestas] = useState(0);

    const cambiarTipo = () => {

        if (cambiarBandera === 0 || cambiarBandera === 1)
            setCambiarBandera(2);

        if (cantRespuestas < 10)
            setCantRespuestas(cantRespuestas + 1)
    }

    const mostrarBandera = () => {
        setCambiarBandera(generateRandomIntegerInRange(0, 1));
        setIndex(generateRandomIntegerInRange(0, 11));
    }

    const setearBandera = (valor) => {
        setBanderaElegida(valor);
        setTituloBandera(valor.pais);
    }

    useEffect(() => {
        setPais1(cargarPais(0, 7));
        setPais2(cargarPais(8, 15));
        setPais3(cargarPais(16, 23));
    }, [tituloBandera])

    const cargarPais = (limInf, limSup) => {
        let p1 = Banderas.arrayNombreBanderas[generateRandomIntegerInRange(limInf, limSup)];
        while (p1 === tituloBandera) {
            p1 = Banderas.arrayNombreBanderas[generateRandomIntegerInRange(limInf, limSup)];
        }
        return p1;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerBandera}>
                {
                    cambiarBandera === 0 &&
                    (
                        <View >
                            <View style={styles.Bandera}>
                                < BanderaHorizontal index={index} setearBandera={setearBandera} />
                            </View>
                        </View>
                    )
                }

                {
                    cambiarBandera === 1 && (
                        <View>
                            <View style={styles.Bandera}>
                                <BanderaVertical index={index} setearBandera={setearBandera} />
                            </View>
                        </View>
                    )
                }
                {
                    cambiarBandera === 2 && (
                        <View>
                            <View style={styles.Bandera}>
                                <BanderaDefault />
                            </View>
                            {
                                cantRespuestas < 10 ?
                                    <View style={styles.btnProximaBandera}>
                                        <BotonCustom titulo="👀 MOSTRAR" color={'#339966'} alPresionar={mostrarBandera} />
                                    </View> :
                                    <View style={styles.btnProximaBandera}>
                                        <BotonCustom titulo="📑 VER RESULTADOS" color={'#00b8e6'} alPresionar={cambiarPantallaResultados} />
                                    </View>
                            }

                        </View>
                    )
                }
            </View>

            <View style={styles.containerCantPreguntas}>
                <Text style={styles.textCantPreguntas}>RESPUESTAS - {cantRespuestas} / 10</Text>
            </View>

            <View style={styles.containerBotones}>
                <ContainerBotones nombreBandera={tituloBandera} sumarPunto={sumarPunto} cambiarTipo={cambiarTipo} pais1={pais1} pais2={pais2} pais3={pais3} deshabilitar={cambiarBandera} />
            </View>

            <View style={styles.btnVolverHome}>
                <BotonCustom titulo="🏠 VOLVER" color={'#005580'} alPresionar={cambiarPantallaHome} />
            </View>

        </View>
    )
}

export default SesionJuego;

