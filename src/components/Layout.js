import React from "react";
import { Navbar, Footer, Sidebar } from "./index";

const Layout = ({ children }) => {
    return (  
        <>
            <Navbar />
            <Sidebar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
 
export default Layout;