import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg' alt={''}/>
            <div>
                Ava+description
            </div>
            <div>
                MyPosts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;