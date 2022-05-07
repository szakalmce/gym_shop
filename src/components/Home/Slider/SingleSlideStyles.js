import styled from "styled-components";

import { device } from "../../../styles/queries";

export const SingleSlider = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  background-position: center;
  background-size: cover;
  width: 100vw;

  @media ${device.mobile} {
    background-position: center;
    margin-top: 150px;
  }
`;

export const SliderInner = styled.div`
  position: absolute;
  top: 40%;
  width: 50vw;
  margin-left: 25vw;
`;

export const Category = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: var(--red-color);

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;
export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  font-style: italic;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;
