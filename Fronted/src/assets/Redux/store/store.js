import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducers } from "../reducers/todoReducer";
 
export const store = createStore(todosReducers, applyMiddleware(thunk));