import {ActionsTypes} from "./redux-store";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

export type ProfileTypes = {
    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk:string | null,
        twitter: string | null
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number
    photos: {small: null | string, large:  string | undefined}
}

export type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string,
    profile: ProfileTypes
}

let initialState: ProfilePropsType = {
    posts: [
        {id: 1, message: "Давно не виделись", likesCount: 15},
        {id: 2, message: "Вот мой новый пост", likesCount: 17},
        {id: 3, message: "Обработал фоточки", likesCount: 19},
        {id: 4, message: "Тяжёлая учёба", likesCount: 20},
        {id: 5, message: "Супер выходные", likesCount: 25},
        {id: 6, message: "Просто пост", likesCount: 3}
    ],
    newPostText: 'Text for your post',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk:'',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 2,
        photos: {small: '', large: ''}
    }
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

export type setUserProfileActionType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: ProfileTypes) => {
    return {
        type: "SET_USER_PROFILE",
        payload: {profile}
    } as const
}

const profileReducer = (state: ProfilePropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: 5, message: action.payload.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.payload.newText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.payload.profile}
        default: {
            return state
        }
    }

}

export default profileReducer
