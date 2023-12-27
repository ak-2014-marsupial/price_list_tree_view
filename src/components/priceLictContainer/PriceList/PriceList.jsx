import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import css from "./PriceList.module.css";
import {Item} from "./Item";
import {priceListActions} from "../../../redux";

const PriceList = () => {
    const dispatch = useDispatch();
    const {priceList,filterPriceList} = useSelector(state => state.priceList);


    const tree = Object.keys(filterPriceList).length>0?filterPriceList:priceList;
    console.log(tree);
    return (
        <div className={css.wrapper}>
            {/*<button onClick={()=>dispatch(priceListActions.getFilterData((node) => node.id === "6"))}>Filter</button>*/}
            <button onClick={()=>dispatch(priceListActions.getFilterDataById("00011122" ))}>Filter</button>
            {tree.children.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
};

export {PriceList};