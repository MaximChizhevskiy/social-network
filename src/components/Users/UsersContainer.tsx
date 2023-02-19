import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {DispatchType, StateReduxType} from "../../redux/redux-store";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UsersPropsType
} from "../../redux/users-reducer";


type UsersMapStateToProps = {
    users: Array<UsersPropsType>
}

type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UsersPropsType>) => void
}

export type UsersPagePropsType = UsersMapStateToProps & UsersMapDispatchToProps

const mapStateToProps = (state: StateReduxType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: DispatchType): UsersMapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUser: (users: Array<UsersPropsType>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);