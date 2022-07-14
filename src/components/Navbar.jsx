import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PersonCircle } from "react-bootstrap-icons";

const Nav = styled.div`
  background-color: #93caed;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div`
  a {
    font-weight: bold;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

const LinkCtr = styled.div`
  display: flex;
  a {
    padding: 10px;
    color: white;
    text-decoration: none;
  }

  a:hover {
    background-color: #5f80c9;
    border-radius: 4px;
  }
`;

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Nav>
        <Title>
          <Link to="/">{props.title}</Link>
        </Title>
        <LinkCtr>
          <Link to="/contactUs">Contact Us</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Login">
            <PersonCircle color="white" size={20} />
          </Link>
        </LinkCtr>
      </Nav>
    </div>
  );
};

export default Navbar;
