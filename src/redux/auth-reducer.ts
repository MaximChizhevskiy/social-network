import {ActionsTypes, AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";

export type AuthInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
export type MeResponseDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
}

let initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type setUserDataActionType = ReturnType<typeof setAuthUserDataActionCreator>
const setAuthUserDataActionCreator = (data: MeResponseDataType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {data}
    } as const
}

const authReducer = (state: AuthInitialStateType = initialState, action: ActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const getAuthUserDataThunkCreator = (): AppThunkType => async dispatch => {
    try {
        const res = await authAPI.me()
        dispatch(setAuthUserDataActionCreator(res.data))
    } catch (err) {
        alert('ERROR: ' + err)
    }
}

export default authReducer
