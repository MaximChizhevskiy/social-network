import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {DispatchType, StateReduxType} from "./redux/redux-store";

type AppType = {
    // profilePage: ProfilePageType
    // dialogsPage: DialogsPageType
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    dispatch: DispatchType
    state: StateReduxType
    // store: StoreReduxType
}

function App(props: AppType) {
    const {state, dispatch} = props
    const {profilePage, dialogsPage} = state
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile posts={profilePage.posts}
                                                      newPostText={profilePage.newPostText}
                                                      dispatch={dispatch}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <Dialogs dialogs={dialogsPage.dialogs}
                                                      messages={dialogsPage.messages}
                                                      newMessageBody={dialogsPage.newMessageBody}/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;