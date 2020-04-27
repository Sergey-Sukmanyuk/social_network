import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {

    let sendMessage = (value) => {
        props.addMessage(value.newMessageText)

    }

    const  userElements = props.users.map(user => <DialogsItem key = {user.id} name = {user.name} id = {user.id}/>)
    const messageElements = props.messages.map(text => <Messages key = {text.id} message = {text.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {userElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div className={style.messageInput}>
                   <DialogsReduxForm onSubmit = {sendMessage}/>
                </div>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field name = {'newMessageText'} placeholder = 'Enter your message' component = {'textarea'}/>
            </div>
            <div >
                <button> Send </button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'addMessageForm'
})(DialogsForm)

export default Dialogs;