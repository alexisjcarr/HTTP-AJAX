import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import FriendsList from "./components/FriendsList/FriendsList";
import Friend from "./components/Friend/Friend";
import FriendsForm from "./components/FriendsForm/FriendsForm";

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
        <FriendsForm handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
