import {combineReducers, legacy_createStore} from "redux";
import profileReducer, {AddPostActionType, ChangeNewTextActionType, setUserProfileActionType} from "./profile-reducer";
import dialogsReducer, {SendNewMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import usersReducer, {
    FollowActionType,
    SetCurrentPageActionType, setTotalUsersCountActionType,
    SetUsersActionType, toggleIsFetchingActionType,
    UnfollowActionType
} from "./users-reducer";

export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageBodyActionType
    | SendNewMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | setUserProfileActionType

export type StateReduxType = ReturnType<typeof store.getState>
export type StoreReduxType = typeof store
export type DispatchType = typeof store.dispatch

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
let store = legacy_createStore(reducers)

export default store