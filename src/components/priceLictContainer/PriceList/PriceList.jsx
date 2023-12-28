import React, {useMemo, useState,useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import css from "./PriceList.module.css";
import {Item} from "./Item";
import {priceListActions} from "../../../redux";

const PriceList = (factory, deps) => {
    const dispatch = useDispatch();
    const {priceList, filterPriceList} = useSelector(state => state.priceList);
    const [id, setId] = useState("");

    const handleInputChange = (e) => {
        setId(e.target.value);
        // dispatch(priceListActions.getFilterData(`${e.target.value}`));
    }

    useEffect(() => {
        const timer=setTimeout(()=>{
            dispatch(priceListActions.getFilterData(id));
            console.log("USEEFFECT");
        },300);
        return ()=>{
            clearTimeout(timer);
        }

    }, [id,dispatch]);



    const tree = filterPriceList?.children?.length ? filterPriceList : priceList;
    const items = useMemo(() => {
        return tree?.children?.map(item => <Item key={item.id} item={item}/>);
    },[tree])

    return (
        <div className={css.wrapper}>
            <input type="text" placeholder={"введiть ID"} onChange={handleInputChange}
                   value={id}
                   onFocus={e => {
                       e.target.select()
                   }}/>
            {items}
        </div>
    );
};

export {PriceList};