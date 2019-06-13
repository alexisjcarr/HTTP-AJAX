import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import FriendsList from "./components/FriendsList/FriendsList";
import Friend from "./components/Friend/Friend";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log("response: ", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addTo = e => {
    e.preventDefault();

    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      return{
        todoArray: [...prevState.todoArray, newItem]
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/friends"
          render={props => <FriendsList {...props} friends={this.state.friends} />}
        />
        <Route
          exact
          path="/friends/:friend"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
