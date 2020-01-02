import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainComponent from "./Components/MainComponent";


function App() {
    const defaultRoute =
        window.location.pathname === "/" ? <Redirect to="/main"/> : undefined;
    return (
        <Router>
            <Switch>
                <Route path={"/main"} exact component={MainComponent}/>
            </Switch>
            {defaultRoute}
        </Router>
    );
}

export default App;
