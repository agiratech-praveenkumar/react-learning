import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`;

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <div>
          Dont have an account? <Link to="/Signup">Signup</Link>
        </div>
      </LoginWrapper>
    </>
  );
};

export default Login;
