import {rerenderEntireTree} from "../render";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogsPageType} from "../components/Dialogs/Dialogs";


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

let state: RootStateType = {
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
        ]
    },
}

export const addPost = () => {

    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;