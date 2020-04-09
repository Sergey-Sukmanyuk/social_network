import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <section className={style.sidebar}>
            <ul>
                <li><NavLink activeClassName={style.active} to="/profile" >Profile</NavLink></li>
                <li><NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink activeClassName={style.active} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={style.active} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={style.active} to="/users">Users</NavLink></li>
                <li><NavLink activeClassName={style.active} to="/settings">Settings</NavLink></li>
            </ul>
        </section>
    )
}

export  default  Navbar;