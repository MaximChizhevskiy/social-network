import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message, {MessageType} from "./Message/Message";
import DialogItem, {DialogsType} from "./DialogItem/DialogItem";
import store, {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string

}

const Dialogs = (props: DialogsPageType) => {

    let state = store.getState().dialogsPage

    const dialogsElement = state.dialogs
        .map((dialog: { name: string; id: number; }) => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElements = state.messages
        .map((m: { message: string; id: number }) => <Message message={m.message} id={m.id}/>)

    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        store.dispatch(sendNewMessageActionCreator())
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter your message"} value={newMessageBody}
                                   onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
