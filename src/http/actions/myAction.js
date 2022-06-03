import { editAccountService, loginService, saveService } from "../services/myService";

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
		return loginService()
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

export const SAVE_REQUEST = 'SAVE_REQUEST';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAIL = 'SAVE_FAIL';

const save = data => {
	const request = () => { 
		return { type: SAVE_REQUEST }; 
	}
	const success = (response) => {
		return {
			type: SAVE_SUCCESS, response, data
		};
	}
	const failure = error => {
		return {
			type: SAVE_FAIL, error
		};
	}
	return dispatch => {
		dispatch(request());
		return saveService()
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

export const SAVE_CLEAN_SUCCESS = 'SAVE_CLEAN_SUCCESS';

const cleanSave = () => {
	const success = () => {
		return {
			type: SAVE_CLEAN_SUCCESS,
		};
	}
	return dispatch => {
		dispatch(success());
	}
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const logout = () => {
	const success = () => {
		return {
			type: LOGOUT_SUCCESS,
		};
	}
	return dispatch => {
		dispatch(success());
	}
}

export const EDIT_ACCOUNT_PROFILE_REQUEST = 'EDIT_ACCOUNT_PROFILE_REQUEST';
export const EDIT_ACCOUNT_PROFILE_SUCCESS = 'EDIT_ACCOUNT_PROFILE_SUCCESS';
export const EDIT_ACCOUNT_PROFILE_FAIL = 'EDIT_ACCOUNT_PROFILE_FAIL';

const editAccount = data => {
	const request = () => { 
		return { type: EDIT_ACCOUNT_PROFILE_REQUEST }; 
	}
	const success = (response, data) => {
		return {
			type: EDIT_ACCOUNT_PROFILE_SUCCESS, response, data
		};
	}
	const failure = error => {
		return {
			type: EDIT_ACCOUNT_PROFILE_FAIL, error
		};
	}
	return dispatch => {
		dispatch(request(data));
		return editAccountService()
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
	login,
	save,
	cleanSave,
	logout,
	editAccount
};
