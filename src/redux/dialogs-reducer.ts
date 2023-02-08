import {ActionsTypes} from "./redux-store";
import {DialogsPageType} from "../components/Dialogs/Dialogs";

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
export const sendNewMessageActionCreator = () => {
  return {
    type: "SEND-NEW-MESSAGE",
  } as const
}

const dialogsReducer = (state:DialogsPageType = initialState, action:ActionsTypes) => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-BODY':
      state.newMessageBody = action.payload.newMessageBodyText
      break;
    case 'SEND-NEW-MESSAGE':
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})
      break;
  }
  return state
}

export default dialogsReducer
