import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import Message, {MessageType} from "./Message/Message";
import DialogItem, {DialogsType} from "./DialogItem/DialogItem";
import {DialogsMapDispatchToProps, DialogsMapStateToProps} from "./DialogsContainer";

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string
    updateNewMessageBody: (body: string) => void
    sendNewMessage: (value: string) => void
    //dialogsPage:DialogsPageType

}
/*
type DialogsPageExtraType ={
    updateNewMessageBody: (body: string) => void
    sendNewMessage: (value: string) => void
    dialogsPage:DialogsPageType
}*/

const Dialogs = (props: DialogsPageType) => {
    const [value, setValue] = useState('')
    const dialogsElement = props.dialogs
        .map((dialog: { name: string; id: number }) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    const messagesElements = props.messages
        .map((message: { message: string; id: number }) => <Message message={message.message} id={message.id} key={message.id}/>)

    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.sendNewMessage(value)
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = event.target.value
        setValue(newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter your message"} value={value}
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
