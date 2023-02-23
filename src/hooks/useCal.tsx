import { useRef, useState } from "react"

enum Operators {
    add, substract, multiply, divide
}


export const useCal = () => {

    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')

    const operacion = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setPreviousNumber('0')
    }

    const buildNumber = (textNumber: string) => {
        if (number.includes('.') && textNumber === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (textNumber === '.') {
                setNumber(number + textNumber)
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)
            } else {
                setNumber(number + textNumber)
            }
        } else {
            setNumber(number === '0' ? textNumber : number + textNumber)
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        }
        else {
            setNumber('-' + number)
        }
    }

    const del = () => {
        let negative = ''
        let tempNumber = number
        if (number.includes('-')) {
            negative = '-'
            tempNumber = number.slice(1)
        }
        if (tempNumber.length > 1) {
            setNumber(number.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const changeNumPrevios = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1))
        } else {
            setPreviousNumber(number)
        }
        setNumber('0')
    }

    const btnDivide = () => {
        changeNumPrevios()
        operacion.current = Operators.divide
    }

    const btnMultiply = () => {
        changeNumPrevios()
        operacion.current = Operators.multiply
    }

    const btnSubstract = () => {
        changeNumPrevios()
        operacion.current = Operators.substract
    }

    const btnAdd = () => {
        changeNumPrevios()
        operacion.current = Operators.add
    }

    const calculate = () => {
        const num1 = Number(number)
        const num2 = Number(previousNumber)
        switch (operacion.current) {
            case Operators.add:
                setNumber(`${num1 + num2}`)
                break;
            case Operators.substract:
                setNumber(`${num2 - num1}`)
                break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`)
                break;
            case Operators.divide:
                if (num1 === 0) {
                    setNumber('0')
                    setPreviousNumber('0')
                    return
                }
                setNumber(`${num2 / num1}`)
                break;
        }
        setPreviousNumber('0')
    }

    return {
        number,
        previousNumber,
        clean,
        buildNumber,
        positiveNegative,
        del,
        btnDivide,
        btnMultiply,
        btnSubstract,
        btnAdd,
        calculate
    }
}
