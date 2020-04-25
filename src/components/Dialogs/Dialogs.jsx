import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {

    let sendMessage = () => {
        props.addMessage()

    }

    let onMessageChange = (event) => {
        let textMessage = event.target.value
        props.updateMessage(textMessage)

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
                    <div>
                        <div>
                            <textarea onChange = {onMessageChange}  value = {props.newMessageText} placeholder="Enter your message"/>
                        </div>
                        <div >
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;