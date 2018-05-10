import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Err from "./pages/Err";

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Err} />
            </Switch>
        </div>
    </Router>
);

export default App;
