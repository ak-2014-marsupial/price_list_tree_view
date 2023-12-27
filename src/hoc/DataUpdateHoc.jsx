import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const DataUpdateHoc = ({children}) => {
    const location = useLocation();
    const {hasData} = useSelector(state => state.priceList);
    if(!hasData) return <Navigate to={ "/dataupdate"} state={{from:location}}/>

    return    children ;
};

export  {DataUpdateHoc};