import React from 'react';

import css from "./Menu.module.css";
import {Item} from "./Item";

const Menu = ({items}) => {
    return (
        <div className={css.wrapper} >
            {items.children.map(item=><Item key={item.id} item={item}/>)}
        </div>
    );
};

export  {Menu};