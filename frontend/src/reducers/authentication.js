import { 
	LOGIN,
	LOGIN_SUCCESS,
	LOGOUT,
	LOGOUT_SUCCESS
} from '../actions/authentication';

const initialState = {
	login: {
		status: "INIT"
	},
	isLoggedIn: false
}

export const authentication = (state=initialState, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				login: {
					...state.login,
					status: "WAIT"
				}
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				login: {
					...state.login,
					status: "SUCCESS"
				},
				isLoggedIn: action.login,
			}
		case LOGOUT:
			return {
				...state,
				login: {
					...state.login,
					status: "WAIT"
				}
			}
		case LOGOUT_SUCCESS:
			return {
				...state,
				login: {
					...state.login,
					status: "INIT"
				},
				isLoggedIn: action.logout
			}
		default:
			return state;
	}
}