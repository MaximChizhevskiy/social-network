import React from "react";
import s from './Post.module.css'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg' alt={''}/>
                {props.message}
                <div>
                    <span>Like: {props.likesCount}</span>
                </div>
            </div>
        </div>

    )
}

export default Post;