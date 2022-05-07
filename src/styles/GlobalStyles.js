import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { device } from "./queries";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap");

* {
  font-family: var(--root-font);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #000;
  width: 100vw;
  overflow-x: hidden;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  font-size: 0.95rem;
  text-decoration: none;
}

.slider-arrow-left {
  position: absolute;
  z-index: 999;
  cursor: pointer;
  font-size: 2rem;
  left: -50px;
  top: 50%;
}

.slider-arrow-right {
  position: absolute;
  z-index: 999;
  cursor: pointer;
  font-size: 2rem;
  right: -50px;
  top: 50%;
}

 
`;

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;

  @media ${device.mobile} {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-style: italic;
  display: inline-block;
  position: relative;
  text-align: center;
  padding-bottom: 2rem;
  color: ${(props) => (props.color === "white" ? "white" : "")};

  &:after {
    content: "";
    position: absolute;
    width: 40%;
    height: 2px;

    background-color: ${(props) =>
      props.color === "white" ? "white" : `var(--red-color)`};
    bottom: 0;
    left: 30%;
  }
`;
