import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainComponent from "./Components/Dashboard/MainComponent";
<<<<<<< HEAD:FrontEnd/frontend/src/App.js
import MatchingComponent from "./Components/MatchingMenu/MatchingComponent";

=======
import LoginComponent from './Components/Login/LoginComponent'
>>>>>>> master:FrontEnd/src/App.js

function App() {
    const defaultRoute =
        window.location.pathname === "/" ? <Redirect to="/main"/> : undefined;
    return (
        <Router>
            <Switch>
<<<<<<< HEAD:FrontEnd/frontend/src/App.js
                <Route path={"/main"} exact component={MainComponent}/>
                <Route path={"/main/matching"} exact component = {MatchingComponent}/>
=======
                <Route path = {"/main"} exact component={MainComponent}/>
                <Route path = {"/login"} component = {LoginComponent}/>
>>>>>>> master:FrontEnd/src/App.js
            </Switch>
            {defaultRoute}
        </Router>
    );
}

export default App;
