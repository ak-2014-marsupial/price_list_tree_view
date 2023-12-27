import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/headerContainer";

const MainLayout = () => {


    return (
        <div className="container">
            <Header/>
            <div style={{height: "80vh",marginTop:"10vh",padding:"0.2em"}}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};