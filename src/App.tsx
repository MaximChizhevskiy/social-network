import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Technologies} from "./components/Technologies";

function App() {
    return (
        <div>
            <Header value={"Home "}/>
            <Header value={"News Feed "}/>
            <Header value={"Messages"}/>
            <Technologies value={"HTML"}/>
            <Technologies value={"CSS"}/>
            <Technologies value={"JS"}/>
            <Technologies value={"React"}/>
        </div>
    );
}

export default App;