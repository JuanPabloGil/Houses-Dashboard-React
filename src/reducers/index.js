import { combineReducers } from 'redux';
import logged from './logged';
import houses from './houses';
import myHouses from './myHouses';

const allReducers = combineReducers({
  logged,
  houses,
  myHouses,
});

export default allReducers;
