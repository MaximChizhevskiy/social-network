import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogsPageType} from "../components/Dialogs/Dialogs";

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

type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {newPostText}
    } as const
}

type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {newText}
    } as const
}

type ChangeNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>
export const updateNewMessageBodyActionCreator = (newMessageBodyText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        payload: {newMessageBodyText}
    } as const
}

type SendNewMessageActionType = ReturnType<typeof sendNewMessageActionCreator>
export const sendNewMessageActionCreator = () => {
    return {
        type: "SEND-NEW-MESSAGE",

    } as const
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageBodyActionType |
    SendNewMessageActionType

let store: StoreType = {
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
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.payload.newMessageBodyText
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-NEW-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}


export default store;