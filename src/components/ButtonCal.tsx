import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    largo?: boolean;
    onPress: (textNumber: string) => void;
}

export const ButtonCal = ({ texto, color = "#2D2D2D", largo = false, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (largo) ? 180 : 80
            }} >
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === "#9B9B9B") ? 'black' : 'white'
                }} >{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
