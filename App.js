import Home from './src/Screens/Home';
import React from 'react';
import Resultados from './src/Screens/Resultados';
import {
  SafeAreaView,
} from 'react-native';
import SesionJuego from './src/Screens/SesionJuego';
import { styles } from './src/Styles/styles_App'
import { useState } from 'react/cjs/react.development';

const App = () => {

  const [pantalla, setPantalla] = useState(0);
  const [puntos, setPuntos] = useState(0);

  const cambiarPantallaHome = () => {
    setPantalla(0);
    setPuntos(0);
  }

  const cambiarPantallaSesionJuego = () => {
    setPantalla(1);
    setPuntos(0);
  }

  const cambiarPantallaResultados = () => {
    setPantalla(2);
  }

  const sumarPunto = () => {
    setPuntos(puntos + 1);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      {
        pantalla === 0 &&
        <Home cambiarPantallaSesionJuego={cambiarPantallaSesionJuego} />
      }

      {
        pantalla === 1 &&
        <SesionJuego cambiarPantallaHome={cambiarPantallaHome} cambiarPantallaResultados={cambiarPantallaResultados} sumarPunto={sumarPunto} />
      }

      {
        pantalla === 2 &&
        <Resultados puntos={puntos} cambiarPantallaHome={cambiarPantallaHome} cambiarPantallaSesionJuego={cambiarPantallaSesionJuego} />
      }

    </SafeAreaView>
  );
};

export default App;
