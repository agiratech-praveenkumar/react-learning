import React from "react";
import styled from "styled-components";

const Notification = styled.div`
  display: inline-block;
  background-color: red;
  color: white;
  font-size: 1em;
`;

const Alerts = (props) => {
  return (
    <>
      <Notification>{props.text}</Notification>
    </>
  );
};

export default Alerts;
