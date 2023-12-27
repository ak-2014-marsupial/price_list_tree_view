import React, {useEffect, useState} from 'react';

import {applyTheme, themes} from "../../../constants";
import css from "./ChangeTheme.module.css";

const ChangeTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme ? storedTheme : "light");
    let [,setThemeColor] = useState("black");

    const handleChange = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    useEffect(() => {
        const {colors} = themes.filter((item) => item.name === theme)[0];
        applyTheme(colors);
        setThemeColor(colors.background);
    }, [theme, storedTheme]);


    const themeList = themes.filter(o => o.name !== theme)
        .map(o => ({name: o.name, color: o.colors.background}));

    return (
        <>
            <div className={css.dropdown}>Theme

                <div className={css.dropdown_content}>
                    {themeList.map(item =>
                        <button className={css.btn} key={item.name} style={{background: `${item.color}`}}
                                onClick={() => handleChange(item.name)}></button>
                    )}
                </div>
            </div>
        </>
    );
};

export {ChangeTheme};