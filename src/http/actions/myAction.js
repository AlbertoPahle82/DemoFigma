import { myService } from "../services/myService";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

const login = data => {
    const request = () => { 
        return { type: LOGIN_REQUEST }; 
    }
    const success = (response, data) => {
        return {
            type: LOGIN_SUCCESS, response, data
        };
    }
    const failure = error => {
        return {
            type: LOGIN_FAIL, error
        };
    }
    return dispatch => {
        dispatch(request(data));
        return myService()
        .then(
            response => {
                dispatch(success(response, data));
            }
        ).catch(
            error => {
                dispatch(failure(error));
            }
        );
    }
}

export const myActions = {
    login
};
