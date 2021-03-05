// Setup data layer
//to track basket
import React, {createContext, useContext, useReducer } from "react";
//this is the DATA LAYER
export const StateContext = createContext ();
// build a provider
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);
//this is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext);