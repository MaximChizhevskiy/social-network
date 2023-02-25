import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {DispatchType, StateReduxType, StoreReduxType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppType = {
    dispatch: DispatchType
    state: StateReduxType
    store: StoreReduxType
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
                               render={() => <Profile store={props.store}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <DialogsContainer />}/>
                        <Route path={'/users'}
                               render={() => <UsersContainer />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;