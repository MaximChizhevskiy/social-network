import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogsPageType} from "../components/Dialogs/Dialogs";
import profileReducer, {AddPostActionType, ChangeNewTextActionType} from "./profile-reducer";
import dialogsReducer, {UpdateNewMessageBodyActionType, SendNewMessageActionType} from "./dialogs-reducer";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (props: RootStateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | UpdateNewMessageBodyActionType | SendNewMessageActionType

let store: any = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Давно не виделись", likesCount: 15},
                {id: 2, message: "Вот мой новый пост", likesCount: 17},
                {id: 3, message: "Обработал фоточки", likesCount: 19},
                {id: 4, message: "Тяжёлая учёба", likesCount: 20},
                {id: 5, message: "Супер выходные", likesCount: 25},
                {id: 6, message: "Просто пост", likesCount: 3}
            ],
            newPostText: 'Text for your post'
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
