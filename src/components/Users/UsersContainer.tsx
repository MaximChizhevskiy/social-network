import React from 'react';
import {connect} from "react-redux";
import {DispatchType, StateReduxType} from "../../redux/redux-store";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator,
    UsersPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.svg'
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component<UsersPagePropsType, StateReduxType> {

    componentDidMount() {
this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        console.log({pageNumber})
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers}
                   setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                   isFetching={this.props.isFetching} toggleIsFetching={this.props.toggleIsFetching}/>
        </>
    }
}

type UsersMapStateToProps = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = UsersMapStateToProps & UsersMapDispatchToProps

const mapStateToProps = (state: StateReduxType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);