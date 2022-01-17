import { Button, View } from "react-native";

import React from "react";

const BotonCustom2 = ({ titulo, color, alPresionar, deshabilitar }) => {
    return (
        <View>
            <Button title={deshabilitar !== 2 ? titulo : ""} color={color} onPress={() => alPresionar(titulo)} disabled={deshabilitar === 2} />
        </View>
    )
}

export default BotonCustom2;