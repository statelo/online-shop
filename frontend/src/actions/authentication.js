import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

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
			dispatch(successLogin(res.data.authenticated));
		})
	}
}

function login() {
	return {
		type: LOGIN
	}
}

function successLogin(login) {
	return {
		type: LOGIN_SUCCESS,
		login
	}
}