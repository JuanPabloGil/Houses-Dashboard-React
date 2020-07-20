import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

    const loggedin = useSelector(state => state.logged);

    return (
        <div>
            <h1>Home</h1>
            {loggedin.loggedInStatus === "NOT_LOGGED_IN" ? 'You are not logged in ': `Welcome ${loggedin.user.user.email}` }
        </div>
    );
};

export default Home;