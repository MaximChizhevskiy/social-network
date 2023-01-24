import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";



export type ProfilePagePropsType = {
    posts: Array<PostType>
    addPost:(postText: string) => void
}

const Profile = (props:ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;