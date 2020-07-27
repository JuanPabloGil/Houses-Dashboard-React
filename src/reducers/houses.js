import { GET_HOUSES_SUCCES } from '../actions';

const defState = [];

const houses = (state = defState, action) => {
  switch (action.type) {
    case GET_HOUSES_SUCCES:
      return action.payload;
    default:
      return state;
  }
};

export default houses;
