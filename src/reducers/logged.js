import { LOGGED } from '../actions';

const defState = {
    user: {},
    loggedInStatus: "NOT_LOGGED_IN"
}

const logged = (state = defState, action) => {

    switch (action.type) {
        case LOGGED:
            return {
                user: action.payload,
                loggedInStatus: 'LOGGED_IN'
            }
        default:
            return state;
    }

};

export default logged;
