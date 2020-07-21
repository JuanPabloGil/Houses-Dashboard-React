import React from 'react';
import Registration from './authentication/registration';
import Login from './authentication/login';
import { useSelector } from 'react-redux';
import HousesList from './houses';


const Home = () => {
    const loggedin = useSelector(state => state.logged);
    return (
        <div>
            {
                loggedin.loggedInStatus === "NOT_LOGGED_IN" ?
                    <div>
                        <h2 className="text-center p-5"> Sign Up </h2>
                        <div className="row">
                            <div className="col-md-6">
                                <Registration />
                            </div>
                            <div className="col-md-6">
                                <Login />
                            </div>
                        </div>
                    </div>
                    :
                    <HousesList />
            }
        </div>
    );
};

export default Home;