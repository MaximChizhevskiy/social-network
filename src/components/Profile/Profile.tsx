import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts, {PostDataType} from "./MyPosts/MyPosts";
import {PostPropsType} from "./MyPosts/Post/Post";



const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;