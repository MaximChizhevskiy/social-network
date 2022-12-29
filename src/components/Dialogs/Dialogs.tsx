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

    let dialogsData = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Xeniya'},
        {id: 3, name: 'Maxim'},
        {id: 4, name: 'Maxim'},
        {id: 5, name: 'Maxim'},
        {id: 6, name: 'Maxim'}
    ]

    let messagesData = [
        {id:1, message: "Привет!"},
        {id:2, message: "Как дел?"},
        {id:3, message: "Чем занят?"},
        {id:4, message: "На связи?"},
        {id:5, message: "Ау?"},
        {id:6, message: "Есть время?"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                   </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>


            </div>
        </div>
    );
};

export default Dialogs;
