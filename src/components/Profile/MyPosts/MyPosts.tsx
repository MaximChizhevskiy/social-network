import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {ActionsTypes} from "../../../redux/state";


type MyPostsPropsType ={
    posts: Array<PostType>
    newPostText: string
    dispatch: (action:ActionsTypes) => void

}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement =
        props.posts.map((p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message}
                                                                                  likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postText: props.newPostText })
    }
    
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;