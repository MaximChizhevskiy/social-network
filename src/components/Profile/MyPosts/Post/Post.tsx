import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg'/>
                Post1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>

    )
}

export default Post;