import React, { useState } from "react";

import { sliders } from "./data";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SingleSlide from "./SingleSlide";

import { Wrapper, SlidersWrapper, ArrowsWrapper, Arrow } from "./SliderStyles";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideRight = () => {
    setSlideIndex(slideIndex + 1);
    if (slideIndex === 1) {
      setSlideIndex(0);
    }
  };

  const handleSlideLeft = () => {
    setSlideIndex(slideIndex - 1);
    if (slideIndex === 0) {
      setSlideIndex(1);
    }
  };

  return (
    <Wrapper>
      <ArrowsWrapper>
        <Arrow onClick={() => handleSlideLeft()} direction="left">
          <MdKeyboardArrowLeft />
        </Arrow>
        <Arrow onClick={() => handleSlideRight()} direction="right">
          <MdKeyboardArrowRight />
        </Arrow>
      </ArrowsWrapper>
      <SlidersWrapper position={slideIndex}>
        {sliders.map((item) => {
          return <SingleSlide key={item.id} {...item} />;
        })}
      </SlidersWrapper>
    </Wrapper>
  );
};

export default Slider;
