import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {ActionsTypes} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {DispatchType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: DispatchType
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement =
        props.posts.map((p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message}
                                                                                           likesCount={p.likesCount}/>)
    const addPost = () => {
        let PostText = props.newPostText
        props.dispatch(addPostActionCreator(PostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
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