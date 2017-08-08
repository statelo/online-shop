import { 
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	LOGOUT_SUCCESS,
	SIGNUP,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	FACEBOOK_LOGIN
} from '../actions/types/authentication';

const initialState = {
	login_status: "INIT",
	signup_status: "INIT",
	isLoggedIn: false,
	user: ''
}

export const authentication = (state=initialState, action) => {
	switch(action.type) {
		case SIGNUP:
			return {
				...state,
				signup_status: "WAIT"
			}
		case SIGNUP_SUCCESS:
			return {
				...state,
				signup_status: "SUCCESS",
				isLoggedIn: action.signup,
				user: action.user
			}
		case SIGNUP_FAILURE:
			return {
				...state,
				signup_status: "FAILURE"
			}
		case LOGIN:
			return {
				...state,
				login_status: "WAIT"
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				login_status: "SUCCESS",
				isLoggedIn: action.login,
				user: action.user
			}
		case FACEBOOK_LOGIN:
			return {
				...state,
				isLoggedIn: action.login,
				user: action.user
			}
		case LOGIN_FAILURE:
			return {
				...state,
				login_status: "FAILURE"
			}
		case LOGOUT:
			return {
				...state,
				login_status: "WAIT"
			}
		case LOGOUT_SUCCESS:
			return {
				...state,
				login_status: "INIT",
				isLoggedIn: action.logout,
				user: ''
			}
		default:
			return state;
	}
}