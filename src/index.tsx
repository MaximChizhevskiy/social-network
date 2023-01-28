import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./redux/state";

export let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={store.getState().dialogsPage} profilePage={store.getState().profilePage} addPost={store.addPost.bind(store)}
             newPostText={store.getState().profilePage.newPostText} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)