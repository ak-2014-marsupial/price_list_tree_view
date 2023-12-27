import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/headerContainer";

const MainLayout = () => {


    return (
        <div className="container">
            <Header/>
            <div style={{height: "80vh"}}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};