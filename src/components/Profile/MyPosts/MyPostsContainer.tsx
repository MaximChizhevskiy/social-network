import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {DispatchType, StateReduxType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType} from "./Post/Post";

export type MyPostsMapStateToProps = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: StateReduxType):MyPostsMapStateToProps => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
}

export type MyPostsMapDispatchToProps = {
    addPost: (PostText:string) => void
    updateNewPost: (newText: string) => void
}

const mapDispatchToProps = (dispatch: DispatchType): MyPostsMapDispatchToProps  => {
  return {
      updateNewPost: (newText: string) => {
          let action = updateNewPostTextActionCreator(newText)
          dispatch(action)
      },
      addPost: (PostText:string) => {
          let action = addPostActionCreator(PostText)
          dispatch(action)
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;