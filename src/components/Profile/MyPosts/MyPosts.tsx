import React from "react";
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type PostDataType = {
    postData: PostPropsType[]
}

const MyPosts = (props: any) => {
    let postData = [
        {id: 1, message: "Привет! Как дел?", likesCount: 15 },
        {id: 2, message: "Вот мой новый пост", likesCount: 17}
    ]
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
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )
}

export default MyPosts;