import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";


const StyledCarousel = styled(Carousel)`
  width: 50vw;
  height: 500px;
`

const CarouselImg = () => {
  return (
    <>
      <StyledCarousel showArrows={true} showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="https://picsum.photos/200" />
        </div>
        <div>
          <img alt="" src="https://picsum.photos/200" />
        </div>
      </StyledCarousel>
    </>
  );
};

export default CarouselImg;
