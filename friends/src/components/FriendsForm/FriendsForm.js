import React, { Component } from "react";
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input[type='text'] {
    height: 40px;
    border-radius: 12px;
    width: 50%;
    background-color: alice-blue;
  }

  button {
    height: 40px;
    border-radius: 12px;
  }
`

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: "",
      },
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value,
      }
    }))
  }

  render() {
    return (
      <Form>
        <input type="text" placeholder="name" name="friend" onChange={this.changeHandler} />
        <input type="text" placeholder="age" name="age" onChange={this.changeHandler} />
        <input type="text" placeholder="email" name="email" onChange={this.changeHandler} />
        <button type="submit">add new friend</button>
      </Form>
    );
  }
}

export default FriendsForm;
