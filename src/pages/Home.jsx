import React from "react";
import styled from "styled-components";
import CarouselImg from "../components/CarouselImg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "./Products";

const HeroSection = styled.div``;

const Title = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12rem;
  z-index: 1;
`;
const Carousel = styled(CarouselImg)`
  height: 100px;
  width: 100%;
`;

const Home = (props) => {
  return (
    <>
      <HeroSection>
        <Title>{props.name ? props.name : "Default Title"}</Title>
        <Carousel />
        <Products />
      </HeroSection>
    </>
  );
};

export default Home;
