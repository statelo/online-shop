import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { authentication } from './reducers/authentication';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState()
const loggerMiddleware = createLogger();

const store = createStore(authentication, persistedState, applyMiddleware(loggerMiddleware, thunkMiddleware));

store.subscribe(throttle(() => {
	saveState({
		isLoggedIn: store.getState().isLoggedIn,
		user: store.getState().user
	});
}, 1000))

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>, 
document.getElementById('root'));
