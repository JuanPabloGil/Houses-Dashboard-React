import React, { useEffect } from 'react';
import Registration from './authentication/registration';
import Login from './authentication/login';
import { useSelector, useDispatch } from 'react-redux';
import HousesList from './houses';
import { getHouses } from '../actions';

const Home = () => {

    const loggedin = useSelector(state => state.logged);
    const houses = useSelector(state => state.houses);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const loadAllHouses = async () => {
            await dispatch(getHouses());
        };
        loadAllHouses();
    }, [dispatch]);


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
                    <div>
                        <h1 className="text-center p-5">Find your ideal Home </h1>
                        <div className="row">
                            {houses.map(h => <HousesList key={ h.id + h.title} data={h} />)}
                        </div>
                    </div>
            }
        </div>
    );
};

export default Home;