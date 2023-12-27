import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import css from "./PriceList.module.css";
import {Item} from "./Item";
import {priceListActions} from "../../../redux";

const PriceList = () => {
    const dispatch = useDispatch();
    const {priceList, filterPriceList} = useSelector(state => state.priceList);
    const [id, setId] = useState("")
    const handleInputChange = (e) => {
        setId(e.target.value)
    }
    const handleClick=(id)=>{
        // dispatch(priceListActions.getDataById(id));
        console.log(id);
        dispatch(priceListActions.getFilterData(id));

    }

    const tree = filterPriceList?.children?.length ? filterPriceList : priceList;

    return (
        <div className={css.wrapper}>
            <input type="text" placeholder={"введiть ID"} onChange={handleInputChange}
                   value={id}
                   onFocus={e => {
                       e.target.select()
                   }}/>
            <button onClick={() =>handleClick(id) }>Filter</button>
            {tree.children.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
};

export {PriceList};