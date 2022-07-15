import React from "react";
import styled from "styled-components";

const Notification = styled.div`
  display: inline-flex;
  background-color: #3AB4F2;
  color: white;
  font-size: 1em;
  padding: 20px 10px;
  border-radius: 4px;
  margin: 10px 0;
`;

const Alerts = (props) => {
  return (
    <>
      {props.text != undefined && <Notification> {props.text} </Notification>}
    </>
  );
};

export default Alerts;
