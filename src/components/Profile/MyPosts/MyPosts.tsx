import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (PostText:string) => void
    updateNewPost: (newText: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement =
        props.posts.map((p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message}
                                                                                           likesCount={p.likesCount}/>)
    const onAddPost = () => {
        let PostText = props.newPostText
        props.addPost(PostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPost(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;