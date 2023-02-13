import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {StoreReduxType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePagePropsType = {
    store: StoreReduxType
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;