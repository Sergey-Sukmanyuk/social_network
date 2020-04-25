import React from 'react'
import {addMessage, updateMessage} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../hoc/authRedirect";


let mapStateToProps = (state) => ({
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages

})

const withAuthRedirect = withRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(withAuthRedirect)

export default DialogsContainer;