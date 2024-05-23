import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LayoutIndex = () => {
    return (
        <>
            <div className="w-full flex flex-col bg-yellow-300 h-a">
                <div className="">
                    <NavBar />
                </div>
                <div className="w-full h-screen flex items-center justify-center">
					<Outlet />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default LayoutIndex;
