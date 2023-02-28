import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileTypes} from "../../redux/profile-reducer";

export type propsType = {
    profile:ProfileTypes,
    setUserProfile:  (profile: ProfileTypes) => void
}

const Profile = (props: propsType) => {

    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;