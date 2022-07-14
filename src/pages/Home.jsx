import React from "react";
import styled from "styled-components";
import CarouselImg from "../components/CarouselImg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = styled.div`
  width: 100vw;
  height: 50vh;
`;

const Title = styled.div``;
const CarouselImgCtr = styled.div`
  height: 100px;
`;

const Home = (props) => {
  return (
    <>
      <HeroSection>
        <Title>{props.name ? props.name : "Default Title"}</Title>
        <CarouselImgCtr>
          {/* <CarouselImg /> */}
        </CarouselImgCtr>
      </HeroSection>
    </>
  );
};

export default Home;
