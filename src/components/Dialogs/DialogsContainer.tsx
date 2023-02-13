import React from 'react';
import store, {DispatchType, StateReduxType, StoreReduxType} from "../../redux/redux-store";
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import dialogs from "./Dialogs";
import {MessageType} from "./Message/Message";
import {DialogsType} from "./DialogItem/DialogItem";

export type DialogsContainerType = {
    store: StoreReduxType
}

export type DialogsMapStateToProps={
    messages:Array<MessageType>
    dialogs:Array<DialogsType>
    newMessageBody:string
}

let mapStateToProps = (state: StateReduxType):DialogsMapStateToProps => {
    return {
        // dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

export type DialogsMapDispatchToProps={
    updateNewMessageBody:(body:string)=>void
    sendNewMessage:(value: string)=>void
}

let mapDispatchToProps = (dispatch: DispatchType):DialogsMapDispatchToProps => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendNewMessage: (value: string) => {
            dispatch(sendNewMessageActionCreator(value))

        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
