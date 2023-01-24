import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs, {DialogsPageType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProfilePageType} from "./redux/state";

type AppType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <Dialogs dialogs={props.dialogsPage.dialogs}
                                                      messages={props.dialogsPage.messages}/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;