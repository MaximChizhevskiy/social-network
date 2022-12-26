import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Xeniya
                </div>
                <div className={s.dialog}>
                    Alena
                </div>
                <div className={s.dialog}>
                    Dauren
                </div>
                <div className={s.dialog}>
                    Daulet
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
                <div className={s.dialog}>
                    Valeriy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привеет!</div>
                <div className={s.message}>Как дел?</div>
                <div className={s.message}>Чем занят?</div>
            </div>
        </div>
    );
};

export default Dialogs;
