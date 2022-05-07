import React from "react";

import {
  SingleSlider,
  SliderInner,
  Category,
  Title,
} from "./SingleSlideStyles";

const SingleSlide = ({ img, category, title }) => {
  return (
    <SingleSlider bg={img}>
      <SliderInner>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </SliderInner>
    </SingleSlider>
  );
};

export default SingleSlide;
