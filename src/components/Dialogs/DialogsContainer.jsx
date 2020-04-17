import React from 'react'
import {addMessage, updateMessage} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => ({
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages
})


const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(Dialogs)

export default DialogsContainer;