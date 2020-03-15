import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import MessageForm from "./Messages/MessageForm/MessageForm";




const Dialogs = (props) => {



    const  userElements = props.dialogsPage.users.map(user => <DialogsItem key = {user.id} name = {user.name} id = {user.id}/>)
    const messageElements = props.dialogsPage.messages.map(text => <Messages key = {text.id} message = {text.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {userElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div className={style.messageInput}>
                    <MessageForm addMessage = {props.addMessage} updateMessage = {props.updateMessage} newMessageText = {props.dialogsPage.newMessageText}/>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;