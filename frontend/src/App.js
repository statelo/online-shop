import React, { Component } from 'react';
import { Home, Authentication, Shop } from './containers';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
	        <Route 
            exact path='/'
            component={Home}
          />
	        <Route
            path='/auth'
            component={Authentication}
          />
          <Route
            path='/shop'
            component={Shop}
          />
      	</Switch>
      </div>
    );
  }
}

export default App;
