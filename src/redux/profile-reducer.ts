import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ActionsTypes} from "./redux-store";
import {ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: "Давно не виделись", likesCount: 15},
        {id: 2, message: "Вот мой новый пост", likesCount: 17},
        {id: 3, message: "Обработал фоточки", likesCount: 19},
        {id: 4, message: "Тяжёлая учёба", likesCount: 20},
        {id: 5, message: "Супер выходные", likesCount: 25},
        {id: 6, message: "Просто пост", likesCount: 3}
    ],
    newPostText: 'Text for your post'
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {newPostText}
    } as const
}

export type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {newText}
    } as const
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.payload.newText
            break;
    }
    return state
}

export default profileReducer
