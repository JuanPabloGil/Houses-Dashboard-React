import { GET_FAVORITES_SUCCESS } from '../actions';

const defState = [];

const favorites = (state = defState, action) => {
  switch (action.type) {
    case GET_FAVORITES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default favorites;
