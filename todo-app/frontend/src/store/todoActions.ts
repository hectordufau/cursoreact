import axios from "axios";
import { DESCRIPTION_CHANGED, TODO_CLEAR, TODO_SEARCHED } from "./todoActionType";

const URL = "http://localhost:3003/todos"

export const changeDescription = (description: string) => ({
    type: DESCRIPTION_CHANGED,
    payload: description
})

export const search = () => {
    return (dispatch: any, getState: any) => {
        const description = getState().todo.description
        const search = description ? `?description=${description}` : "";
        axios.get(`${URL}${search}`).then(resp => dispatch({
            type: TODO_SEARCHED,
            payload: resp.data.data
        }))
    }
}

export const add = (description: string) => {
    return (dispatch: any) => {
        axios.post(URL, { description }).then(resp => dispatch(clear())).then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo: any) => {
    return (dispatch: any) => {
        axios.put(`${URL}/${todo.id}`, { done: true }).then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo: any) => {
    return (dispatch: any) => {
        axios.put(`${URL}/${todo.id}`, { done: false }).then(resp => dispatch(search()))
    }
}

export const remove = (todo: any) => {
    return (dispatch: any) => {
        axios.delete(`${URL}/${todo.id}`).then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: TODO_CLEAR }, search()]
}