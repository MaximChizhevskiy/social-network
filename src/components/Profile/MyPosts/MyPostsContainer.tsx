import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {DispatchType, StateReduxType, StoreReduxType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {MessageType} from "../../Dialogs/Message/Message";
import {DialogsType} from "../../Dialogs/DialogItem/DialogItem";
import {PostType} from "./Post/Post";
import {ProfilePagePropsType} from "../Profile";
import {ProfilePageType} from "../../../redux/store";

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