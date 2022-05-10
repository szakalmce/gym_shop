import React from "react";
import { Container, Title } from "../../../styles/GlobalStyles";
import { brands } from "./data";
import styled from "styled-components";

import Slider from "react-slick";

const Wrapper = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

const SlideWrapper = styled.div``;
const Brand = styled.div``;
const Img = styled.img``;

// $ pozamieniaj wszędzie var na const lub let (w większości przypadków na const)
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BrandSlider = () => {
  return (
    // <Container>
    //
    //
    //     <SlideWrapper>
    //       {brands.map((brand) => {
    //         return (
    //           <Brand key={brand.id}>
    //             <Img src={brand.img} />
    //           </Brand>
    //         );
    //       })}
    //     </SlideWrapper>
    //   </Wrapper>
    // </Container>
    <Container>
      <Wrapper>
        {/*  // $ staraj się unikać inline styles, przenieś to do klasy css i przypisz jako className */}
        <Title style={{ marginBottom: "2rem" }}>OUR BRAND</Title>
        <SlideWrapper>
          <Slider {...settings}>
            {brands.map((brand) => {
              return (
                <Brand key={brand.id}>
                  <Img src={brand.img} />
                </Brand>
              );
            })}
          </Slider>
        </SlideWrapper>
      </Wrapper>
    </Container>
  );
};

export default BrandSlider;
