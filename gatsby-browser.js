import React from "react";
import "./src/assets/css/bigclass.css";
import "./src/assets/css/index.css";
import { ContextProvider } from "./src/context/context";

export const wrapRootElement = ({ element }) => {
    return <ContextProvider>{element}</ContextProvider>
}