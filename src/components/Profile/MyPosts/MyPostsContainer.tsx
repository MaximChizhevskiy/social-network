import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {DispatchType, StoreReduxType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    dispatch: DispatchType
    store: StoreReduxType
    //newPostText: string
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    const addPost = (PostText:string) => {
        //let PostText = props.newPostText
        props.dispatch(addPostActionCreator(PostText))
    }

    const onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost}
                 updateNewPost={onPostChange}/>
    )
}
export default MyPostsContainer;