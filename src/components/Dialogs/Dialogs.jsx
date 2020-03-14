import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import InputMessage from "./Messages/Input/InputMessage";
import {addMessage} from "../Redux/state";



const Dialogs = (props) => {



    const  userElements = props.state.users.map(user => <DialogsItem key = {user.id} name = {user.name} id = {user.id}/>)
    const messageElements = props.state.messages.map(text => <Messages key = {text.id} message = {text.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {userElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div className={style.messageInput}>
                    <InputMessage addMessage = {props.addMessage}/>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;