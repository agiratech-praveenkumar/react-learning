import React from "react";
import styled from "styled-components";

const Btn = styled.button``;

const Button = (props) => {
  return (
    <>
      <Btn>
        {props.name ? props.name : "Click"}
      </Btn>
    </>
  );
};

export default Button;
