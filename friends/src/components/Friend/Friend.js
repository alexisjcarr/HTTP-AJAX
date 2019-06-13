import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 50px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;

const Friend = props => {
  const { name, age, email } = props;
  return (
    <Card>
      <h1>{name}</h1>
      <p>{age} years old</p>
      <p>{email}</p>
    </Card>
  );
};

export default Friend;
