import React from "react";
import {StateReduxType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUsersThunkCreator, ProfileTypes} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerPagePropsType, StateReduxType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileUser(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: StateReduxType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile
})

type ProfileMapStateToPropsType = {
    profile: ProfileTypes
}

type ProfileMapDispatchToProps = {
    getProfileUser: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPagePropsType =
    ProfileMapStateToPropsType
    & ProfileMapDispatchToProps
    & RouteComponentProps<PathParamsType>

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileUser: getProfileUsersThunkCreator})(WithUrlDataContainerComponent);