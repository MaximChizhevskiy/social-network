import React from "react";
import {StateReduxType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileTypes, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerPagePropsType, StateReduxType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
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
    setUserProfile: (profile: ProfileTypes) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileContainerPagePropsType =
    ProfileMapStateToPropsType
    & ProfileMapDispatchToProps
    & RouteComponentProps<PathParamsType>

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);