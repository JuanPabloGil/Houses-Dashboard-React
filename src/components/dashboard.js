import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const loggedin = useSelector(state => state.logged);
    return (
        <div>
            <h1>Dashboard</h1>
            {loggedin.loggedInStatus === "NOT_LOGGED_IN" ? 'You are not logged in ' : `Welcome ${loggedin.user.email}`}
        </div>
    );
};
export default Dashboard;