import { MY_ACTION_REQUEST, MY_ACTION_SUCCESS, MY_ACTION_FAIL } from './../actions/myAction';

const initialState = {
	// nothing here
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case MY_ACTION_REQUEST:
		{
			return {
				...state,
				myData: {
					isLoading: true
				}
			};
		}
		case MY_ACTION_SUCCESS:
		{
			console.info('REDUCER CALLED');
			return {
				...state,
				myData: action?.response?.data
			};
		}
		case MY_ACTION_FAIL:
		{
			return {
				...state,
				myData: action?.error?.response?.data
			};
		}
		default:
		{
			return state
		}
	}
}

export default myReducer;
