import { combineReducers } from 'redux';
import logged from './logged';
import houses from './houses';

const allReducers = combineReducers({
    logged,
    houses,
});

export default allReducers;
