import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";



export type ProfilePagePropsType = {
    posts: Array<PostType>
    addPost:() => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props:ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;