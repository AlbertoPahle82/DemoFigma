import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_SUCCESS, SAVE_REQUEST, SAVE_CLEAN_SUCCESS, LOGOUT_SUCCESS, EDIT_ACCOUNT_PROFILE_REQUEST, EDIT_ACCOUNT_PROFILE_SUCCESS, EDIT_ACCOUNT_PROFILE_FAIL } from './../actions/myAction';

const initialState = {
	videos: { list: [] },
	accountData: {
		firstName: 'Balamurali',
		lastName: 'A',
		email: '13bala90@gmail.com'
	}
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
		case SAVE_REQUEST:
		{
			// const videoState = state.videos;
			// const videoData = {...action.data};
			// videoState.push(videoData);
			return {
				...state,
				save: {isLoading: true}
			};
		}
		case SAVE_SUCCESS:
		{
			return {
				...state,
				videos: { list: [...state.videos.list, {...action.data}]},
				save: action?.response?.data
			};
		}
		case SAVE_CLEAN_SUCCESS:
		{
			return {
				...state,
				save: undefined
			};
		}
		case LOGOUT_SUCCESS:
		{
			return {
				...state,
				login: undefined,
				credentials: undefined
			};
		}
		case EDIT_ACCOUNT_PROFILE_REQUEST:
		{
			return {
				...state,
				account: {
					isLoading: true
				}
			};
		}
		case EDIT_ACCOUNT_PROFILE_SUCCESS:
		{
			return {
				...state,
				account: action?.response?.data,
				accountData: action?.data
			};
		}
		case EDIT_ACCOUNT_PROFILE_FAIL:
		{
			return {
				...state,
				account: action?.error?.response?.data
			};
		}
		default:
		{
			return state
		}
	}
}

export default myReducer;
