import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyHouses } from '../actions';
import NewHouseForm from './form/newHouseForm';
import MyHousesList from './myHousesList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const myHouses = useSelector(state => state.myHouses);

  useEffect(() => {
    const loadAllHouses = async () => {
      await dispatch(getMyHouses());
    };
    loadAllHouses();
  }, [dispatch]);

  return (
    <div>
      <h1 className="display-4 text-center">Dashboard</h1>
      <NewHouseForm />
      <div>
        <h1 className="text-center p-5"> My Houses  </h1>
        <div className="row">
          {myHouses.map(h => <MyHousesList key={h.id + h.title} data={h} />)}
        </div>
      </div>

    </div>

  );
};
export default Dashboard;
