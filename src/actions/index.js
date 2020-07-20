export const REGISTRATION = 'REGISTRATION';

export const makeReg = (data) => {
    return {
        type: REGISTRATION,
        payload: data,
    };
}

export const LOGGED = 'LOGGED';

export const logged = (data) => {
    return {
        type: LOGGED,
        payload: data,
    }
}