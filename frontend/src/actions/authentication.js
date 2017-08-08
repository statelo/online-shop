import axios from 'axios';
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
} from './types/authentication';

export function requestFacebookLogin() {
	return (dispatch) => {
		return axios.get('/auth').then(res => {
			if(!res.data.user) {
				dispatch(facebookLogin(res.data.authenticated, res.data.user));
			} else {
				dispatch(facebookLogin(res.data.authenticated, res.data.user.oauth_name))
			}
		})
	}
}

function facebookLogin(login, user) {
	return {
		type: FACEBOOK_LOGIN,
		login,
		user
	}
}

export function requestSignup(username, password, password_repeat, first_name, last_name) {
	return (dispatch) => {
		dispatch(signup());

		return axios.post('/auth/signup', {username, password, password_repeat, first_name, last_name}).then(res => {
			dispatch(successSignup(res.data.authenticated, res.data.user.first_name))
		}).catch(err => {
			dispatch(failureSignup())
			dispatch(login())
		})
	}
}

function signup() {
	return {
		type: SIGNUP
	}
}

function successSignup(signup, user) {
	return {
		type: SIGNUP_SUCCESS,
		signup,
		user
	}
}

function failureSignup() {
	return {
		type: SIGNUP_FAILURE
	}
}

export function requestLogout() {
	return (dispatch) => {
		dispatch(logout());

		return axios.get('/auth/logout').then(res => {
			dispatch(successLogout(res.data.authenticated))
		})
	}
}

function logout() {
	return {
		type: LOGOUT
	}
}

function successLogout(logout) {
	return {
		type: LOGOUT_SUCCESS,
		logout
	}
}

export function requestLogin(username, password) {
	return (dispatch) => {
		dispatch(login());

		return axios.post('/auth/login', {username, password}).then(res => {
			dispatch(successLogin(res.data.authenticated, res.data.user.first_name));
		}).catch(err => {
			dispatch(failureLogin())
			dispatch(signup())
		})
	}
}

function login() {
	return {
		type: LOGIN
	}
}

function successLogin(login, user) {
	return {
		type: LOGIN_SUCCESS,
		login,
		user
	}
}

function failureLogin() {
	return {
		type: LOGIN_FAILURE
	}
}