import React, {useState} from 'react';

import css from "./Menu.module.css";
const Item = ({item}) => {
    const [isOpened, setIsOpened] = useState(false);

    return (

        <div >
            <div className={css.menu_item} onClick={() => item.children && setIsOpened(!isOpened)
            }>{item.children && item.children.length>0 && (isOpened? <span>&#9660;</span>:<span>&#9654;</span>)} {item.name}</div>

            {item.children && <div className={[css.sub_menu, isOpened ? "" : css.sub_menu_shrunk].join(" ")}>
                {item.children.map(subitem => <Item  item={subitem}/>)}
            </div>}

        </div>
    );
};

export  {Item};