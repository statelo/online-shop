import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Main/Home';
import Registration from './Authentication/Registration';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: []
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		fetch(`/api/name`, {
			accept: "application/json"
		}).then(res => {
			return res.json()
		}).then(data => {
			data.map((user) => {
				return this.setState({
					names: [...this.state.names, user.first_name]
				})
			})
		})
	}

  render() {
    return (
      <div>
        {/*<h1 onClick={this.handleClick}>Hello</h1>*/}

        <Route exact path="/" component={Home}/>
				<Route path="/signup" component={Registration}/>
      </div>
    );
  }
}

export default App;
