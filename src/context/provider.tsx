import { ReactNode } from "react";
import { AppContext, INITIAL_STATE } from ".";

interface IProps {
    children: ReactNode;
}

export const AppContextProvider = ({children}: IProps) => {
    return (
        <AppContext.Provider 
            value={{
                state: INITIAL_STATE,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};