import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {
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
                <Post message={`Привет! Как дел?`} like={`Like: 15`}/>
                <Post message={`Что новенького`} like={`Like: 17`}/>
                <Post message={`Что делаешь завтра?`} like={`Like: 23`}/>
            </div>
        </div>
    )
}

export default MyPosts;