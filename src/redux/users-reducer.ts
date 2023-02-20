import {ActionsTypes} from "./redux-store";

export type UsersPropsType = {
    id: number,
    photos: any,// ИСПРАВИТЬ!
    followed: boolean,
    name: string,
    status: string,
    location: UserLocationPropsType
}

type UserLocationPropsType = {
    city: string,
    country: string
}

type initialStateType = {
    users: Array<UsersPropsType>
}

let initialState: initialStateType = {
    users: []
}

export type FollowActionType = ReturnType<typeof followActionCreator>
export const followActionCreator = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {userId}
    } as const
}

export type UnfollowActionType = ReturnType<typeof unfollowActionCreator>
export const unfollowActionCreator = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userId}
    } as const
}

export type SetUsersActionType = ReturnType<typeof setUsersActionCreator>
export const setUsersActionCreator = (users: Array<UsersPropsType>) => {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}

const userReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.payload.users]}
        default: {
            return state
        }
    }
}

export default userReducer
