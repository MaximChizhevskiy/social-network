import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg' alt={''}/>
            <div>
                Ava+description
            </div>
            <MyPosts />
            </div>
        )
}

export default Profile;