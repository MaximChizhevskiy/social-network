import React from 'react';
import store, {StoreReduxType} from "../../redux/redux-store";
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export type DialogsContainerType = {
    store: StoreReduxType
}

const DialogsContainer = (props: DialogsContainerType) => {

    let state = store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(sendNewMessageActionCreator())
    }

    const onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <Dialogs messages={state.messages} dialogs={state.dialogs} newMessageBody={state.newMessageBody}
                 updateNewMessageBody={onNewMessageChange}
                 sendNewMessage={onSendMessageClick} dialogsPage={state}/>
    );
};

export default DialogsContainer;
