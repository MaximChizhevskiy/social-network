import React from 'react';
import {connect} from "react-redux";
import {DispatchType, StateReduxType} from "../../redux/redux-store";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UsersPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component<UsersPagePropsType, StateReduxType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        console.log({pageNumber})
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                      follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}/>
    }
}

type UsersMapStateToProps = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPagePropsType = UsersMapStateToProps & UsersMapDispatchToProps

const mapStateToProps = (state: StateReduxType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        setUsers: (users: Array<UsersPropsType>) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}

    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);