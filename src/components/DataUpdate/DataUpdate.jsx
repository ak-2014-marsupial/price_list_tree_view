import React, {useEffect, useState} from 'react';

import css from "./DataUpdate.module.css"
import {Modal} from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {priceListActions} from "../../redux";
import {useLocation, useNavigate} from "react-router-dom";
import {Loader} from "../Loader";

const DataUpdate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from.pathname || "/";

    const [code, setCode] = useState("");
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();
    const {isLoading, hasData} = useSelector(state => state.priceList);

    const handleInputChange = (e) => {
        setCode(e.target.value);
    }

    const handleClose = () => {
        setActive(false);
    }
    const handleLoad = () => {
        dispatch(priceListActions.getAll({code: `${code}`}))
    }

    useEffect(() => {
        if (hasData) navigate(fromPage)

    }, [hasData,navigate,fromPage]);
    return (
        <Modal active={active} setActive={setActive}>
            <div className={css.data}>
                {isLoading ? <Loader/> :null}
                <div className={css.title}>Залишки закодовані.<br/> Щоб розкодувати, введіть код</div>
                <input type="number" placeholder={"введiть код"} onChange={handleInputChange}
                       value={code}
                       onFocus={e => {
                           e.target.select()
                       }}/>
                <button onClick={handleLoad}>Завантажити</button>
                <button onClick={handleClose}>Закрыть</button>
            </div>
        </Modal>
    );
};

export {DataUpdate};