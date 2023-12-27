import React, {useEffect, useState} from 'react';

import css from "./Header.module.css";
import {ChangeTheme} from "../ChangeTheme";
import {Burger} from "../../Burger";
import {NavLink} from "react-router-dom";
import {Search} from "../Search";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Swipe handler:
    useEffect(() => {
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;

        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        })
        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;
            // if (
            //     startTouchX < 100 && Math.abs(endTouchY - startTouchY) < 40 && endTouchX > startTouchX
            // ) {
            //     setIsOpen(true)
            // }
            // ;
            if (
                startTouchX > 240 && Math.abs(endTouchY - startTouchY) < 40 && endTouchX < startTouchX
            ) {
                setIsOpen(false)
            }
            ;

        })


    }, []);


    return (
        <header className={css.header}>
            {/*<span className={css.logo}>Logo</span>*/}
            <Search/>
            <nav className={isOpen ? [css.nav, css.nav_active].join(" ") : css.nav}>
                <ul className={css.nav_list}>
                    <li className={css.nav_item}><NavLink to={"main"}>Main</NavLink></li>
                    <li className={css.nav_item}><NavLink to={"price"}>Price List </NavLink>  </li>
                    <li className={css.nav_item}>Address</li>
                    <li className={css.nav_item}>Login</li>
                    <li className={css.nav_item}><ChangeTheme/></li>
                </ul>
            </nav>
            <div className={css.burger}>
                <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </header>
    );
};

export {Header};