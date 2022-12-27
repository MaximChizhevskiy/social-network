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
const Message = (props:any) => {
   return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Xeniya" id={"1"}/>
                <DialogItem name="Alena" id={"2"}/>
                <DialogItem name="Daulet" id={"3"}/>
                <DialogItem name="Dauren" id={"4"}/>
                <DialogItem name="Vladimir" id={"5"}/>
                <DialogItem name="Valeriy" id={"6"}/>
            </div>
            <div className={s.messages}>
                <Message message ={"Привет!"}/>
                <Message message ={"Как дел?"}/>
                <Message message ={"Чем занят?"}/>
                <Message message ={"На связи?"}/>
                <Message message ={"Ау?"}/>
                <Message message ={"Есть время?"}/>

            </div>
        </div>
    );
};

export default Dialogs;
