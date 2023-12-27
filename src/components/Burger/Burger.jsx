import React from 'react';

import css from "./Burger.module.css";

const Burger = ({isOpen,setIsOpen}) => {

    return (
        <div className={css.border} onClick={()=>setIsOpen(!isOpen)}>
            <div className={[css.burger, isOpen?css.active:""].join(" ")}>
                <span></span>
            </div>
        </div>
    );
};

export {Burger};