import React, { useState} from 'react';

import css from "./PriceList.module.css";

const Item = ({item}) => {
    const formatter = new Intl.NumberFormat("uk-UK",{minimumFractionDigits:2});
    const [isOpened, setIsOpened] = useState(false);
    const handleClick = (item) => {
        item.children && setIsOpened(!isOpened);
    }
    console.log("render Item");
    return (

        <div>
            <div className={css.menu_item} onClick={()=>handleClick(item)}>
                {item.children && item.children.length > 0 && (isOpened ?
                    <span>&#9660;</span> :
                    <span>&#9654;</span>)}
                {!item.data ? (
                    <div className={css.group}>{item.name}</div>
                ):(
                    <div  className={css.row}  >
                        <div className={css.title}>{item.name}</div>
                        {/*<div>{item.data.id}</div>*/}
                        <div className={css.col}>
                        <div className={css.price}>{formatter.format(item.data.price)}</div>
                        <div className={css.stock}>{item.data.stock} {item.data.unit} </div>
                        </div>
                    </div>
                )}


            </div>
            {item.children && <div className={[css.sub_menu, isOpened ? "" : css.sub_menu_shrunk].join(" ")}>
                {item.children.map(subitem => <Item key={subitem.id} item={subitem}/>)}
            </div>}

        </div>
    );
};

export {Item};