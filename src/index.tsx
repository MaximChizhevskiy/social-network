import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreReduxType} from "./redux/redux-store";
import store from "./redux/redux-store";

export let rerenderEntireTree = (store: StoreReduxType) => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch}

        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})