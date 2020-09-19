import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Login} from "./login/Login";

function App() {
    return (
        <div className="App">
            фыва
            <div>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
