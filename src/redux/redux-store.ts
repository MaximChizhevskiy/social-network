import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {AddPostActionType, ChangeNewTextActionType, profileReducer, setUserProfileActionType} from "./profile-reducer";
import dialogsReducer, {SendNewMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import usersReducer, {
    FollowActionType,
    SetCurrentPageActionType, setTotalUsersCountActionType,
    SetUsersActionType, toggleIsFetchingActionType, toggleFollowingProgressActionType,
    UnfollowActionType
} from "./users-reducer";
import authReducer, {setUserDataActionType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk"

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
    | setUserDataActionType
    | toggleFollowingProgressActionType

export type StateReduxType = ReturnType<typeof store.getState>
export type StoreReduxType = typeof store
export type DispatchType = typeof store.dispatch
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,StateReduxType, unknown, ActionsTypes>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store