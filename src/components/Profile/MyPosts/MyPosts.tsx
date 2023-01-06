import React from "react";
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type PostDataType = {
    postData: PostPropsType[]
}

const MyPosts = (props: any) => {
    let posts = [
        {id: 1, message: "Привет! Как дел?", likesCount: 15 },
        {id: 2, message: "Вот мой новый пост", likesCount: 17}
    ]

    let postsElement =
        posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;