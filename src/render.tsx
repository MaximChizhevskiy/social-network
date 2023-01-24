import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStateType} from "./redux/state";
import {addPost} from "./redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={state.dialogsPage} profilePage={state.profilePage} addPost={addPost}/>,
        document.getElementById('root')
    );
}
