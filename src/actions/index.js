import axios from "axios";
export const LOGGED = 'LOGGED';
export const GET_HOUSES_REQUEST = 'GET_HOUSES_REQUEST';
export const GET_HOUSES_SUCCES = 'GET_HOUSES_SUCCES';


export const logged = (data) => {
    return {
        type: LOGGED,
        payload: data,
    }
}

export function getHousesSucces(data) {
    return {
        type: GET_HOUSES_SUCCES,
        payload: data,
    };
};

export const getHouses = () => async dispatch => {
    axios.get('http://localhost:3001/houses', {withCredentials:true})
    .then(response => {
        dispatch(getHousesSucces(response.data))
    }) 
}

