//Action Reducer and State

//! combineReducer - allows placing multiple reducers in one store
import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducer";

const reducer = combineReducers({
    counterReducer,

})

const store = createStore(reducer)
export default store;