import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreReduxType} from "./redux/redux-store";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export let rerenderEntireTree = (store: StoreReduxType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App state={store.getState()} store={store} dispatch={store.dispatch}/>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})


/* <App state={store.getState()}
             dispatch={store.dispatch}
             store={store}*/