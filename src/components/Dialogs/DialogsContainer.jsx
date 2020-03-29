import React from 'react'
import {addMessageAC, updateMessageAC} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => ({
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages
})

let mapDispatchToProps = (dispatch) => ({
    addMessage: () => dispatch(addMessageAC()),
    updateMessage: (textMessage) => dispatch(updateMessageAC(textMessage))
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;