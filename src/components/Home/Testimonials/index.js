import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { device } from "../../../styles/queries";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "./data";

const Wrapper = styled.div`
  position: relative;
`;

const WrapperPath = styled.div`
  background-color: var(--dark-light-color);
  height: 700px;
  clip-path: polygon(0 200px, 100% 0, 100% 100%, 0% 100%);
  padding-top: 10rem;
  width: 100%;
  margin-top: -13rem;

  @media ${device.mobile} {
    clip-path: polygon(0 75px, 100% 0, 100% 100%, 0% 100%);
    height: 600px;
    margin-top: -5rem;
    padding-top: 3rem;
  }
`;

const SliderWrapper = styled.div`
  text-align: center;
  padding: 5rem 0;
`;
const SliderIcon = styled.div`
  margin-bottom: 3rem;
  svg {
    font-size: 5rem;
    color: var(--red-color);
  }

  @media ${device.mobile} {
    margin-bottom: 3rem;
  }
`;

const Slider = styled.div`
  display: flex;
  height: 100%;
  width: 300%;
  flex-shrink: 0;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const SliderContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  height: 150px;
  overflow: hidden;

  @media ${device.mobile} {
    width: 70%;
  }
`;

const SliderInner = styled.div`
  transform: ${(props) => `translateX(${props.position * -100}% )`};
  transition: all 0.2s ease-in-out;
  flex-basis: 33%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: var(--white-color);
`;
const UserValue = styled.div`
  line-height: 1.5rem;
  font-style: italic;
`;
const UserData = styled.div``;
const UserName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: var(--red-color);
  font-style: italic;
  margin-bottom: 0.25rem;
`;
const UserPosition = styled.div``;

const ArrowsWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  color: var(--white-color);
  font-size: 2rem;
  gap: 2rem;
`;
const ArrowLeft = styled.div`
  cursor: pointer;
`;
const ArrowRight = styled(ArrowLeft)``;

const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  const handleChangeSlide = (direction) => {
    if (direction === "left") {
      setSlide(slide - 1);
      if (slide === 0) {
        setSlide(2);
      }
    }

    if (direction === "right") {
      setSlide(slide + 1);
      if (slide === 2) {
        setSlide(0);
      }
    }
  };

  return (
    <Wrapper>
      <WrapperPath>
        <SliderWrapper>
          <SliderIcon>
            <FaQuoteLeft />
          </SliderIcon>
          <SliderContainer>
            <Carousel>
              <Slider>
                {testimonialsData.map((item) => {
                  return (
                    <SliderInner position={slide} key={item.id}>
                      <UserValue>{item.value}</UserValue>
                      <UserData>
                        <UserName>{item.name}</UserName>
                        <UserPosition>{item.position}</UserPosition>
                      </UserData>
                    </SliderInner>
                  );
                })}
              </Slider>
            </Carousel>
          </SliderContainer>
          <ArrowsWrapper>
            <ArrowLeft onClick={() => handleChangeSlide("left")}>
              <MdKeyboardArrowLeft />
            </ArrowLeft>
            <ArrowRight onClick={() => handleChangeSlide("right")}>
              <MdKeyboardArrowRight />
            </ArrowRight>
          </ArrowsWrapper>
        </SliderWrapper>
      </WrapperPath>
    </Wrapper>
  );
};

export default Testimonials;
