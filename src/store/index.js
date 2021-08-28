import {applyMiddleware, combineReducers, createStore} from "redux";
import {customersReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    customers: customersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))