import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";
import store, {DispatchType} from "../../redux/redux-store";


export type ProfilePagePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: DispatchType
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={store.dispatch}/>
        </div>
    )
}

export default Profile;