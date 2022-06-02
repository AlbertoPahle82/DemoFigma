import { myService } from "../services/myService";

export const MY_ACTION_REQUEST = 'MY_ACTION_REQUEST';
export const MY_ACTION_SUCCESS = 'MY_ACTION_SUCCESS';
export const MY_ACTION_FAIL = 'MY_ACTION_FAIL';

const myAction = () => {
    const request = () => { 
        console.info('MYACTION CALLED');
        return { type: MY_ACTION_REQUEST }; 
    }
    const success = response => {
        return {
            type: MY_ACTION_SUCCESS, response
        };
    }
    const failure = error => {
        return {
            type: MY_ACTION_FAIL, error
        };
    }
    return dispatch => {
        dispatch(request());
        return myService()
        .then(
            response => {
                dispatch(success(response));
            }
        ).catch(
            error => {
                dispatch(failure(error));
            }
        );
    }
}

export const myActions = {
    myAction
};
