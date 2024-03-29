import {ActionsTypes, AppThunkType} from "./redux-store";
import {usersAPI} from "../api/api";

export type UsersPropsType = {
    id: number,
    photos: {small: null | string, large: null | string},
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
    followingInProgress: Array<number>
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type FollowActionType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {userId}
    } as const
}

export type UnfollowActionType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userId}
    } as const
}

export type SetUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UsersPropsType>) => {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {currentPage}
    } as const
}

export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const
}

export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        payload: {isFetching}
    } as const
}

export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        payload: {followingInProgress, userId}
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
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {...state, followingInProgress: action.payload.followingInProgress
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default: {
            return state
        }
    }
}

//Thunk on async await with try catch
export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunkType => async dispatch => {
    try {
        dispatch(toggleIsFetching(true))
        const res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(res.items))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(res.totalCount))
        dispatch(toggleIsFetching(false))
    } catch (err) {
        alert('ERROR: ' + err)
    }
}

export const unfollowThunkCreator = (userId: number): AppThunkType => async dispatch => {
    try {
        dispatch(toggleFollowingProgress(true, userId))
        const res = await usersAPI.unfollow(userId)
        if (res.resultCode === 0) {
            dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
    } catch (err) {
        alert('ERROR: ' + err)
    }
}

export const followThunkCreator = (userId: number): AppThunkType => async dispatch => {
    try {
        dispatch(toggleFollowingProgress(true, userId))
        const res = await usersAPI.follow(userId)
            if (res.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
    } catch (err) {
        alert('ERROR: ' + err)
    }
}

//Thunk
//*export const getUsersThunkCreator = (currentPage: number, pageSize: number) : AppThunkType => {
//     return (dispatch) => {
//         dispatch(toggleIsFetching(true))
//
//         usersAPI.getUsers(currentPage, pageSize)
//         .then(data => {
//             dispatch(setUsers(data.items))
//             dispatch(setTotalUsersCount(data.totalCount))
//             dispatch(toggleIsFetching(false))
//         })
//     }
// }*/

export default userReducer


