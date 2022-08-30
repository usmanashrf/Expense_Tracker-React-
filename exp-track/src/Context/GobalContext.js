import React , {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions:[
        {id:1, description:"Income 1",transactionAmount:1000},
        {id:2, description:"Expense 1",transactionAmount:-100},
        {id:3, description:"Income 2",transactionAmount:4000},
        {id:4, description:"Expense 2", transactionAmount:-300}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(<GlobalContext.Provider value={
        {
            transactions : state.transactions
        }
    }>
        {children}
    </GlobalContext.Provider>)
}
