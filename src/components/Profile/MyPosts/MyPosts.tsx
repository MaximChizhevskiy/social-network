import React from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";


type MyPostsPropsType ={
    posts: Array<PostType>
    addPost:(postText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement =
        props.posts.map((p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message}
                                                                                  likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current)
        props.addPost(newPostElement.current.value)
        
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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