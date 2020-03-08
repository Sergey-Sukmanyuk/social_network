import React from 'react';
import style from'./Navbar.module.css'


const Navbar = () => {
    return(
        <section className={style.sidebar}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </section>
    )
}

export  default  Navbar;