import { combineReducers } from "redux";
import { CartProductReducer, ProductReducer } from "./app";

const RootReducer = combineReducers({
    productR : ProductReducer,
    cartR: CartProductReducer,
})

export default RootReducer;