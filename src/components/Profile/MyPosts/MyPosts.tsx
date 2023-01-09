import React from "react";
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type PostDataType = {
    postData: PostPropsType[]
}

const MyPosts = (props: any) => {
    console.log('postsProps', props)
    /*let posts = [
        {id: 1, message: "Давно не виделись", likesCount: 15 },
        {id: 2, message: "Вот мой новый пост", likesCount: 17},
        {id: 3, message: "Обработал фоточки", likesCount: 19},
        {id: 4, message: "Тяжёлая учёба", likesCount: 20},
        {id: 5, message: "Супер выходные", likesCount: 25},
        {id: 6, message: "Просто пост", likesCount: 3}
    ]*/

    let postsElement =
        props.posts.map((p: { id: any; message: any; likesCount: any; }) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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