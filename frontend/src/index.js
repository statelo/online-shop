import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { authentication } from './reducers/authentication';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle'

const persistedState = loadState()
const loggerMiddleware = createLogger();

const store = createStore(authentication, persistedState, applyMiddleware(loggerMiddleware, thunkMiddleware));

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>, 
document.getElementById('root'));
