import {ActionsTypes} from "./state";
import {DialogsPageType} from "../components/Dialogs/Dialogs";

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

const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) => {
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
