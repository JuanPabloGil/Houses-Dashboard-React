import React, { useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logged } from './actions';
import Home from './components/home';
import House from './components/house';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation/navigation';
import Signup from './components/authentication/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './components/favorites';

const App = () => {
  const dispatch = useDispatch();

  const checkLoginStatus = () => {
    Axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          dispatch(logged(response.data.user));
        }
      });
  };

  useEffect(() => { checkLoginStatus(); });

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/favorites" component={Favorites} />
            <Route path="/house/:id" component={House} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
