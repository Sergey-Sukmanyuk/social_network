import React from 'react';
import logo from "../../images/logo_.png";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return(
        <header className={style.header}>
            <div className={style.logoWrapper}>
                <a href="#"><img className={style.logo} src={logo} alt="Logo"/></a>
            </div>

            <div className={style.loginBlock}>
                {isAuth ? login :  <NavLink to = {'/login'}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header;