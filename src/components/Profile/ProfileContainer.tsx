import React from "react";
import {StateReduxType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileTypes, setUserProfile} from "../../redux/profile-reducer";

export type ProfileContainerPagePropsType = ProfileMapStateToPropsType & ProfileMapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPagePropsType, StateReduxType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

type ProfileMapStateToPropsType = {
    profile: ProfileTypes
}

let mapStateToProps = (state: StateReduxType):ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile
})

type ProfileMapDispatchToProps = {
    setUserProfile: (profile: ProfileTypes) => void
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);