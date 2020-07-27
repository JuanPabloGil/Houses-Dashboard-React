import { GET_MY_HOUSES_SUCCES } from '../actions';

const defState = [];

const myHouses = (state = defState, action) => {
  switch (action.type) {
    case GET_MY_HOUSES_SUCCES:
      return action.payload;
    default:
      return state;
  }
};

export default myHouses;
