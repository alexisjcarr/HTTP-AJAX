import React, { Component } from "react";

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <form>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="age" name="age" />
        <input type="text" placeholder="email" name="email" />
        <button type="submit">add new friend</button>
      </form>
    );
  }
}

export default FriendsForm;
