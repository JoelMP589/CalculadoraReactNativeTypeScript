import React from 'react'
import { Text, View } from 'react-native';
import { ButtonCal } from '../components/ButtonCal';
import { useCal } from '../hooks/useCal';
import { styles } from '../theme/appTheme';


export const CalculadoraScreen = () => {

    const { number, previousNumber, clean, positiveNegative, buildNumber, del, btnDivide, btnAdd, btnMultiply,
        btnSubstract, calculate } = useCal();


    return (
        <View style={styles.calculadoraContainer}>
            {previousNumber !== '0' && <Text style={styles.resultadoPequeno}>{previousNumber}</Text>}
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>

            <View style={styles.fila}>
                <ButtonCal texto="C" color="#9B9B9B" onPress={clean} />
                <ButtonCal texto="+/-" color="#9B9B9B" onPress={positiveNegative} />
                <ButtonCal texto="del" color="#9B9B9B" onPress={del} />
                <ButtonCal texto="/" color="#FF9427" onPress={btnDivide} />
            </View>

            <View style={styles.fila}>
                <ButtonCal texto="7" onPress={buildNumber} />
                <ButtonCal texto="8" onPress={buildNumber} />
                <ButtonCal texto="9" onPress={buildNumber} />
                <ButtonCal texto="X" color="#FF9427" onPress={btnMultiply} />
            </View>

            <View style={styles.fila}>
                <ButtonCal texto="4" onPress={buildNumber} />
                <ButtonCal texto="5" onPress={buildNumber} />
                <ButtonCal texto="6" onPress={buildNumber} />
                <ButtonCal texto="-" color="#FF9427" onPress={btnSubstract} />
            </View>

            <View style={styles.fila}>
                <ButtonCal texto="1" onPress={buildNumber} />
                <ButtonCal texto="2" onPress={buildNumber} />
                <ButtonCal texto="3" onPress={buildNumber} />
                <ButtonCal texto="+" color="#FF9427" onPress={btnAdd} />
            </View>

            <View style={styles.fila}>
                <ButtonCal texto="0" largo onPress={buildNumber} />
                <ButtonCal texto="." onPress={buildNumber} />
                <ButtonCal texto="=" color="#FF9427" onPress={calculate} />
            </View>
        </View>
    )
}
