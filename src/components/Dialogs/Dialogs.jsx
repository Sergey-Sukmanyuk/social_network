import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {



    const  userElements = props.users.map(user => <DialogsItem name = {user.name} id = {user.id}/>)
    const messageElements = props.messages.map(text => <Messages message = {text.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {userElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;