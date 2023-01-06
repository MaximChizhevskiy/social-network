import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: any) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props: any) => {

    let dialogs = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Xeniya'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Daulet'},
        {id: 5, name: 'Dauren'},
        {id: 6, name: 'Wova'}
    ]
let dialogsElement = dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messages = [
        {id:1, message: "Привет!"},
        {id:2, message: "Как дел?"},
        {id:3, message: "Чем занят?"},
        {id:4, message: "На связи?"},
        {id:5, message: "Ау?"},
        {id:6, message: "Есть время?"}
    ]

    let messagesElements = messages
        .map(m => <Message message={m.message}/>)

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
