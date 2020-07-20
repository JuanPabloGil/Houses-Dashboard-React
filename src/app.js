import React  from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/home'
import Dashboard from './components/dashboard'
import Registration from './components/registration'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/dashboard"} component={Dashboard} />
                        <Route exact path={"/registration"} component={Registration} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;