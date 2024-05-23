import React from "react";
import NavBar from "./layouts/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full flex flex-col bg-yellow-300 h-screen">
                <div className="w-full">
                    <NavBar />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </>
    );
};

export default Layout;
