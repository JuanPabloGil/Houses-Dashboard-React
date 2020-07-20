import { combineReducers } from 'redux';
import logged from './logged';

const allReducers = combineReducers({
    logged,
});

export default allReducers;
