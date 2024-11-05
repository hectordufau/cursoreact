import { combineReducers, createStore } from "redux";
import numerosReducers from "./reducers/numerosReducers";

const reducers = combineReducers({
    numeros: numerosReducers
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig