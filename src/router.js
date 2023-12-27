import {createHashRouter, Navigate} from "react-router-dom";
import React from "react";
import {MainPage} from "./pages";
import { MainLayout} from "./layouts";
import {PriceListPage} from "./pages/PriceListPage";
import {DataUpdate} from "./components/DataUpdate/DataUpdate";
import {DataUpdateHoc} from "./hoc/DataUpdateHoc";

// const router= createBrowserRouter([
const router = createHashRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"main"}/>},
            {path: "main", element: <MainPage/>},
            {path: "dataupdate", element: <DataUpdate/>},
            {
                path: "price", element: <DataUpdateHoc>
                    <PriceListPage/>
                </DataUpdateHoc>
            }

        ]
    }
])

export {
    router
}