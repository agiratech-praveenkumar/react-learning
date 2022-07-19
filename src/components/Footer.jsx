import React from "react";
import styled from "styled-components";

const FooterCtr = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

const Footer = () => {
  return (
    <>
      <FooterCtr>Footer</FooterCtr>
    </>
  );
};

export default Footer;
