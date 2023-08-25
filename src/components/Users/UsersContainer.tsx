import React from 'react';
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    unfollow,
    unfollowThunkCreator,
    UsersPropsType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

export type UsersContainerPagePropsType = UsersMapStateToProps & UsersMapDispatchToProps

class UsersContainer extends React.Component<UsersContainerPagePropsType, StateReduxType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   getUsersThunkCreator={this.props.getUsersThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }
}

const mapStateToProps = (state: StateReduxType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsersThunkCreator,
        unfollowThunkCreator, followThunkCreator})(UsersContainer);

//types
type UsersMapStateToProps = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}