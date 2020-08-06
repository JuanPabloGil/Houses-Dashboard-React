import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HousesList from './houses';
import { getHouses } from '../actions';
import Signup from './authentication/signup';

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
        loggedin.loggedInStatus === 'NOT_LOGGED_IN' ? (
          <Signup />
        )
          : (
            <div>
              <h1 className="text-center p-5">Find your ideal Home </h1>
              <div className="row">
                {houses.map(h => <HousesList key={h.id + h.title} data={h} />)}
              </div>
            </div>
          )
      }
    </div>
  );
};

export default Home;
