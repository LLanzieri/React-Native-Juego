import { Button, View } from "react-native";

import React from "react";

const BotonCustom = ({ titulo, color, alPresionar }) => {
    return (
        <View>
            <Button title={titulo} color={color} onPress={() => alPresionar()} />
        </View>
    )
}

export default BotonCustom;