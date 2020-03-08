import React from 'react';
import logo from "../images/logo_.png";
import style from './Header.module.css'

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo__wrapper}>
                <a href="#"><img className={style.logo} src={logo} alt="Logo"/></a>
            </div>
        </header>
    )
}

export default Header;