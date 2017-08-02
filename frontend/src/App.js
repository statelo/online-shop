import React, { Component } from 'react';
import { Header, Authentication } from './containers';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
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
