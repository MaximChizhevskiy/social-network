import {ActionsTypes} from "./redux-store";

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
export const setAuthUserDataActionCreator = (data: MeResponseDataType) => {
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

export default authReducer
