import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "./components/Dialogs/Message/Message";

function App(props: any) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                    </Switch>
                    {/*<Dialogs/>*/}
                    {/*<ProfileInfo/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;