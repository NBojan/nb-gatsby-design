import React, { useState, createContext, useContext } from "react";
import links from "../assets/constants/links";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSide = () => setSidebar(!sidebar);

    return <AppContext.Provider value={{ links, sidebar, toggleSide }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);
