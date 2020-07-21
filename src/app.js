import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import Home from './components/home'
import Dashboard from './components/dashboard'
import { logged } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const dispatch = useDispatch();

    const checkLoginStatus = () => {
        Axios.get("http://localhost:3001/logged_in", { withCredentials: true })
            .then(response => {
                if (response.data.logged_in) {
                    dispatch(logged(response.data.user))
                }
            })
            .catch(error => { console.log("errors of logged_in?", error) })
    }

    useEffect(() => { checkLoginStatus() });

    return (
        <div className="App">

            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/dashboard"} component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;