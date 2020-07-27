import { combineReducers } from 'redux';
import logged from './logged';
import houses from './houses';
import myHouses from './myHouses';
import favorites from './favorites'

const allReducers = combineReducers({
  logged,
  houses,
  myHouses,
  favorites
});

export default allReducers;
