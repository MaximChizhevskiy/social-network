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
        props.posts.map((post: { id: number; message: string; likesCount: number; }) => <Post id={post.id} message={post.message}
                                                                                           likesCount={post.likesCount} key={post.id}/>)
    const onAddPost = () => {
        let postText = props.newPostText
        if (postText !== '') {
            props.addPost(postText)
        }
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
                    <textarea placeholder={"Enter your post's text"} onChange={onPostChange} value={props.newPostText}></textarea>
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