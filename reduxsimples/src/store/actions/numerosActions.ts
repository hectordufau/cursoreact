import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes"

export const alterarNumeroMinimo = (novoNumero: number) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export const alterarNumeroMaximo = (novoNumero: number) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}