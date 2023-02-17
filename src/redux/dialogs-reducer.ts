import {ActionsTypes} from "./redux-store";

let initialState = {
    messages: [
        {id: 1, message: "Привет!"},
        {id: 2, message: "Как дел?"},
        {id: 3, message: "Чем занят?"},
        {id: 4, message: "На связи?"},
        {id: 5, message: "Ау?"},
        {id: 6, message: "Есть время?"}
    ],
    dialogs: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Xeniya'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Daulet'},
        {id: 5, name: 'Dauren'},
        {id: 6, name: 'Wova'}
    ],
    newMessageBody: ""
}

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>
export const updateNewMessageBodyActionCreator = (newMessageBodyText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        payload: {newMessageBodyText}
    } as const
}

export type SendNewMessageActionType = ReturnType<typeof sendNewMessageActionCreator>
export const sendNewMessageActionCreator = (value: string) => {
    return {
        type: "SEND-NEW-MESSAGE",
        payload: {value}
    } as const
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.payload.newMessageBodyText}
        case 'SEND-NEW-MESSAGE':
            return {...state, messages: [...state.messages, {id: 6, message: action.payload.value}]}
        default: {
            return state
        }
    }
}

export default dialogsReducer
