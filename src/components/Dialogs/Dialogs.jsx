import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import MessageFormContainer from "./Messages/MessageForm/MessageFormContainer";




const Dialogs = (props) => {

let dialogsPage = props.store.getState().dialogsPage

    const  userElements = dialogsPage.users.map(user => <DialogsItem key = {user.id} name = {user.name} id = {user.id}/>)
    const messageElements = dialogsPage.messages.map(text => <Messages key = {text.id} message = {text.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {userElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div className={style.messageInput}>
                    <MessageFormContainer store = {props.store} newMessageText = {dialogsPage.newMessageText}/>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;