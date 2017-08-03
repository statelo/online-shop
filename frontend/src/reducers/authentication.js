import { 
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	LOGOUT_SUCCESS
} from '../actions/authentication';

const initialState = {
	status: "INIT",
	isLoggedIn: false,
	user: ''
}

export const authentication = (state=initialState, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				status: "WAIT"
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				status: "SUCCESS",
				isLoggedIn: action.login,
				user: action.user
			}
		case LOGIN_FAILURE:
			return {
				...state,
				status: "FAILURE"
			}
		case LOGOUT:
			return {
				...state,
				status: "WAIT"
			}
		case LOGOUT_SUCCESS:
			return {
				...state,
				status: "INIT",
				isLoggedIn: action.logout,
				user: ''
			}
		default:
			return state;
	}
}