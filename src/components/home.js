import React from 'react';
import Registration from './authentication/registration';
import Login from './authentication/login';
import { useSelector } from 'react-redux';

const Home = () => {
    const loggedin = useSelector(state => state.logged);
    return (
        <div>
            <h1>Home</h1>
            {
            loggedin.loggedInStatus === "NOT_LOGGED_IN" ?

                <div className="row">
                    <div className="col-md-6">
                        <Registration />
                    </div>
                    <div className="col-md-6">
                        <Login />
                    </div>
                </div>

                :
                <h1> You are already logged in </h1>
            }
        </div>
    );
};

export default Home;