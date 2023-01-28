import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./redux/state";

export let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={store.getState().dialogsPage} profilePage={store.getState().profilePage}
             newPostText={store.getState().profilePage.newPostText} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)