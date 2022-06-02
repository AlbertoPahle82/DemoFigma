import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './../actions/myAction';

const initialState = {
	// nothing here
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		{
			return {
				...state,
				login: {
					isLoading: true
				}
			};
		}
		case LOGIN_SUCCESS:
		{
			return {
				...state,
				login: action?.response?.data,
				credentials: action?.data
			};
		}
		case LOGIN_FAIL:
		{
			return {
				...state,
				login: action?.error?.response?.data
			};
		}
		default:
		{
			return state
		}
	}
}

export default myReducer;
