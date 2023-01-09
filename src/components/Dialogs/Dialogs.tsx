import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props: any) => {

    let dialogsElement = props.state.dialogs
        .map((dialog: { name: any; id: any; }) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messages
        .map((m: { message: any; }) => <Message message={m.message}/>)

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
