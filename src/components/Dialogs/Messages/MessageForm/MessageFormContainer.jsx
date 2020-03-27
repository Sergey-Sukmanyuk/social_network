import React from 'react'

import MessageForm from "./MessageForm";
import {addMessageAC, updateMessageAC} from "../../../Redux/dialogsReducer";



const MessageFormContainer = (props) => {

    // let textInput = React.createRef()
    let sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMessageChange = (textMessage) => {
        props.store.dispatch(updateMessageAC(textMessage))
    }

    return (
        <div>
           <MessageForm addMessage = {sendMessage} updateMessage = {onMessageChange} newMessageText = {props.store.getState().dialogsPage.newMessageText}/>
        </div>

    )
}


export default MessageFormContainer;