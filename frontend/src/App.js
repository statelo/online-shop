import React, { Component } from 'react';
import { Header, Authentication } from './containers';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
	        <Route 
            exact path='/'
            component={Header}
          />
	        <Route 
            path='/auth' 
            component={Authentication}
          />
      	</Switch>
      </div>
    );
  }
}

export default App;
