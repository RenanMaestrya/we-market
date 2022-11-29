import { createContext } from "react";

export const INITIAL_STATE = {}

export const AppContext = createContext({state: INITIAL_STATE});