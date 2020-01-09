import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainComponent from "./Components/Dashboard/MainComponent";
import MatchingComponent from "./Components/MatchingMenu/MatchingComponent";

import LoginComponent from "./Components/Accounts/LoginComponent";
import RegisterComponent from "./Components/Accounts/RegisterComponent";

function App() {
    const defaultRoute =
        window.location.pathname === "/" ? <Redirect to="/main"/> : undefined;
    return (
        <Router>
            <Switch>
                <Route path={"/main"} exact component={MainComponent}/>
                <Route path={"/main/matching"} exact component = {MatchingComponent}/>
                <Route path = {"/main"} exact component={MainComponent}/>
                <Route path = {"/login"} component = {LoginComponent}/>
                <Route path = {"/register"} component = {RegisterComponent}/>
            </Switch>
            {defaultRoute}
        </Router>
    );
}

export default App;
