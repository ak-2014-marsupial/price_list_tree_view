import React from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./Search.module.css";
import icon from "../../../assets/images/search_find.png"
import {useForm} from "react-hook-form";


const Search = () => {
    const {register, handleSubmit, reset} = useForm();
    const [, setQuery] = useSearchParams();
    const handleSearch = (txt) => {
        setQuery(prev => {
            prev.set("filter", txt.search);
            return prev;
        })
    }

    return (
        <form className={css.search} onSubmit={handleSubmit(handleSearch)}>
            <div><input type="text" name={"search"} placeholder={"search"} {...register('search')}/></div>
            <button>
                <div className={css.wrap_img}><img src={icon} alt="Search"/></div>
            </button>
        </form>
    );
};

export {Search};