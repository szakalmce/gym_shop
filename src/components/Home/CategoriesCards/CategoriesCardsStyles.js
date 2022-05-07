import styled from "styled-components";

import { device } from "../../../styles/queries";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -4rem;
  z-index: 10;
  position: relative;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;
  }
`;

export const SingleCategory = styled.div`
  background-image: ${(props) => `url(${props.bg})`};
  height: 500px;
  background-position: center;
  transition: all 0.2s ease-in-out;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3rem;
  flex-direction: column;
  gap: 1rem;

  @media ${device.mobile} {
    gap: 0.5rem;
  }
`;

export const CategoryText = styled.div`
  text-align: center;
  transform: translateY(100px);
  transition: all 0.5s;
`;

export const SingleCategoryWrapper = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  height: 500px;
  overflow: hidden;

  &:hover ${SingleCategory} {
    transition: all 0.5s;
    background-size: 110%;
  }

  &:hover ${CategoryText} {
    transform: translateY(0);
    transition: all 0.5s;
  }
`;

export const Title = styled.h2`
  color: var(--white-color);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 1rem 1.5rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
`;
