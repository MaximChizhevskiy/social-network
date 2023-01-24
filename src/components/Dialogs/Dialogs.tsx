import React from 'react';
import s from './Dialogs.module.css'
import Message, {MessageType} from "./Message/Message";
import DialogItem, {DialogsType} from "./DialogItem/DialogItem";


export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}

const Dialogs = (props: DialogsPageType) => {

    let dialogsElement = props.dialogs
        .map((dialog: { name: string; id: number; }) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messages
        .map((m: { message: string; id: number}) => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
