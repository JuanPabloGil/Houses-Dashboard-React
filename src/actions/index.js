import axios from 'axios';

export const LOGGED = 'LOGGED';
export const GET_HOUSES_SUCCES = 'GET_HOUSES_SUCCES';
export const GET_MY_HOUSES_SUCCES = 'GET_HOUSES_SUCCES';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';

export const logged = data => ({
  type: LOGGED,
  payload: data,
});

export function getHousesSucces(data) {
  return {
    type: GET_HOUSES_SUCCES,
    payload: data,
  };
}

export function getMyHousesSucces(data) {
  return {
    type: GET_MY_HOUSES_SUCCES,
    payload: data,
  };
}

export function getFavoritesSucces(data) {
  return {
    type: GET_FAVORITES_SUCCESS,
    payload: data,
  };
}

export const getHouses = () => async dispatch => {
  axios.get(' https://frozen-bayou-05010.herokuapp.com/houses', { withCredentials: true })
    .then(response => {
      dispatch(getHousesSucces(response.data));
    });
};

export const getMyHouses = () => async dispatch => {
  axios.get(' https://frozen-bayou-05010.herokuapp.com/myhouses', { withCredentials: true })
    .then(response => {
      dispatch(getMyHousesSucces(response.data));
    });
};

export const getFavorites = () => async dispatch => {
  axios.get(' https://frozen-bayou-05010.herokuapp.com/favorites', { withCredentials: true })
    .then(response => {
      dispatch(getFavoritesSucces(response.data));
    });
};
