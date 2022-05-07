import styled from "styled-components";

import { device } from "../../../styles/queries";

export const Wrapper = styled.div`
  background-color: ${(props) => `var(--${props.bg}-color)`};
  height: 700px;
  display: flex;

  justify-content: center;
  color: var(--white-color);

  &:last-child {
    color: var(--dark-color);
  }

  @media ${device.mobile} {
    height: 400px;
  }
`;

export const CardInner = styled.div`
  width: 40%;
  height: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.mobile} {
    width: 80%;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  svg {
    font-size: 3.5rem;

    @media ${device.mobile} {
      font-size: 2.5rem;
    }
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-style: italic;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;
export const Desc = styled.p`
  line-height: 1.5rem;
  text-align: justify;

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;
export const Link = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => `var(--${props.color}-color)`};

  a {
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
    color: ${(props) => `var(--${props.color}-color)`};
    font-weight: bold;
    font-style: italic;
  }
`;
