import React from "react";
import styled from "styled-components";

import Friend from "../Friend/Friend";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const FriendsList = props => {
  const { friends } = props;
  return (
    <div>
      <Cards>
        {friends.map(friend => (
          <Friend
            name={friend.name}
            age={friend.age}
            email={friend.email}
            key={friend.id}
          />
        ))}
      </Cards>
    </div>
  );
};

export default FriendsList;
