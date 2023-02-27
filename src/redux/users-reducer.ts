import {ActionsTypes} from "./redux-store";

export type UsersPropsType = {
    id: number,
    photos: any,// ИСПРАВИТЬ!
    followed: boolean,
    name: string,
    status: string,
    location: UserLocationPropsType
    onPageChanged: (pages: Array<UsersPropsType>) => void

}

type UserLocationPropsType = {
    city: string,
    country: string
}

type initialStateType = {
    users: Array<UsersPropsType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageActionCreator>
export const setCurrentPageActionCreator = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {currentPage}
    } as const
}

export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountActionCreator>
export const setTotalUsersCountActionCreator = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const
}

export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingActionCreator>
export const toggleIsFetchingActionCreator = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        payload: {isFetching}
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
            return {...state, users: action.payload.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default: {
            return state
        }
    }
}

export default userReducer
