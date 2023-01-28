import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";
import store, {AddPostActionType, ChangeNewTextActionType} from "../../redux/state";



export type ProfilePagePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action:AddPostActionType | ChangeNewTextActionType) => void
}

const Profile = (props:ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch = {store.dispatch.bind(store)}/>
        </div>
    )
}

export default Profile;