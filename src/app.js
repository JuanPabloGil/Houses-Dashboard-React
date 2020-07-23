import React, { useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { logged } from './actions';
import Home from './components/home'
import House from './components/house'
import Dashboard from './components/dashboard'
import Navigation from './components/navigation/navigation';


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
            <BrowserRouter>
                <Navigation />
                <div className="container">
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/dashboard"} component={Dashboard} />
                        <Route path="/house/:id" component={House} />
                    </Switch>

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;