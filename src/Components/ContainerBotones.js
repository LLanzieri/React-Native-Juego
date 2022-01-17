import { useEffect, useState } from "react/cjs/react.development";

import BotonCustom2 from './BotonCustom2';
import React from "react";
import { View } from "react-native";
import { generateRandomIntegerInRange } from '../Utils/functions/funciones';
import { styles } from '../Styles/styles_SesionJuego';

const ContainerBotones = ({ nombreBandera, sumarPunto, cambiarTipo, pais1, pais2, pais3, deshabilitar }) => {

    const [containerRespuestaCorrecta, setcontainerRespuestaCorrecta] = useState(generateRandomIntegerInRange(1, 4))
    const [opcion1, setOpcion1] = useState(false);
    const [opcion2, setOpcion2] = useState(false);
    const [opcion3, setOpcion3] = useState(false);
    const [opcion4, setOpcion4] = useState(false);

    const mostrarContainerCorrecto = (valor) => {
        if (valor === 1) {
            setOpcion1(true);
            setOpcion2(false);
            setOpcion3(false);
            setOpcion4(false);
        }
        if (valor === 2) {
            setOpcion1(false);
            setOpcion2(true);
            setOpcion3(false);
            setOpcion4(false);
        }
        if (valor === 3) {
            setOpcion1(false);
            setOpcion2(false);
            setOpcion3(true);
            setOpcion4(false);
        }
        if (valor === 4) {
            setOpcion1(false);
            setOpcion2(false);
            setOpcion3(false);
            setOpcion4(true);
        }
    }

    const elegiUnaOpcion = (opcion) => {
        if (opcion === nombreBandera)
            sumarPunto();

        cambiarTipo();
        setcontainerRespuestaCorrecta(generateRandomIntegerInRange(1, 4));
    }

    useEffect(() => {
        mostrarContainerCorrecto(containerRespuestaCorrecta);
    });

    return (
        <View>
            {
                opcion1 && (
                    <View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={nombreBandera} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais1} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais2} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais3} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                    </View>)
            }
            {
                opcion2 && (
                    <View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais1} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={nombreBandera} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais2} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais3} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                    </View>)
            }
            {
                opcion3 && (
                    <View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais1} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais2} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={nombreBandera} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais3} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                    </View>)
            }
            {
                opcion4 && (
                    <View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais1} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais2} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={pais3} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                        <View style={styles.btnOpcion}>
                            <BotonCustom2 titulo={nombreBandera} color={'#005580'} alPresionar={elegiUnaOpcion} deshabilitar={deshabilitar} />
                        </View>
                    </View>)
            }
        </View>
    )
}

export default ContainerBotones;