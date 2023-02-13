import {combineReducers, legacy_createStore} from "redux";
import profileReducer, {AddPostActionType, ChangeNewTextActionType} from "./profile-reducer";
import dialogsReducer, {SendNewMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | UpdateNewMessageBodyActionType | SendNewMessageActionType
export type StateReduxType = ReturnType<typeof store.getState>
export type StoreReduxType = typeof store
export type DispatchType = typeof store.dispatch

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer
})
let store = legacy_createStore(reducers)

export default store