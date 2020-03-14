import React from 'react'
import style from './../Dialogs.module.css'
import InputMessage from "./Input/InputMessage";


const Messages = (props) => {
    return (
                <div className={style.message}>{props.message}</div>
    )
}


export default Messages;