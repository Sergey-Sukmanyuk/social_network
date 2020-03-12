import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return(
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink  activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name = "Sergey" id = '1'/>
                <DialogItem name = "Vitalik" id = '2'/>
                <DialogItem name = "Dima" id = '3'/>
                <DialogItem name = "Irina" id = '4'/>
            </div>
            <div className={style.messages}>
                <Message message = "Hello, how are you?"/>
                <Message message = "I'm fine. What about you?"/>
                <Message message = "I'm fine too)"/>
            </div>
        </div>
    )
}

export default Dialogs;