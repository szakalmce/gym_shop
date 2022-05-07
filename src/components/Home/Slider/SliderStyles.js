import styled from "styled-components";
import { device } from "../../../styles/queries";

export const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const SlidersWrapper = styled.div`
  height: 95vh;
  width: 200%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  transform: ${(props) =>
    props.position === 0 ? "translateX(0)" : "translateX(-50%)"};
  transition: all 0.5s ease-in-out;

  @media ${device.mobile} {
    height: 40vh;
  }
`;

export const ArrowsWrapper = styled.div`
  top: 50%;
  left: 0%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;
export const Arrow = styled.div`
  left: ${(props) => (props.direction === "left" ? "5%" : null)};
  right: ${(props) => (props.direction === "right" ? "5%" : null)};
  position: absolute;

  svg {
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
`;
