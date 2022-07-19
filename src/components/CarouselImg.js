import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";

const StyledCarousel = styled(Carousel)`
  width: 100vw;
`;

const Img = styled.img`
  height: 50vh;
`;

const CarouselImg = () => {
  return (
    <>
      <StyledCarousel showArrows={true} showThumbs={false} showStatus={false}>
        <div>
          <Img alt="no imgage" src={img1} />
        </div>
        <div>
          <Img alt="no image" src={img2} />
        </div>
      </StyledCarousel>
    </>
  );
};

export default CarouselImg;
