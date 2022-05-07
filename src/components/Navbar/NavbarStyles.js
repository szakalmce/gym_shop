import styled from "styled-components";
import { device } from "../../styles/queries";

export const Wrapper = styled.div`
  background-color: ${(props) => props.bg};
  position: ${(props) => props.position};
  height: 100px;
  width: 100%;
`;

export const NavbarInner = styled.div`
  width: 90%;
  padding: 1rem auto;
  display: flex;
  align-items: center;
  position: absolute;
  left: 5%;
  z-index: 10;
  height: 100%;

  @media ${device.mobile} {
    background-color: var(--dark-color);
    width: 100%;
    margin: 0;
    left: 0;
    padding: 1rem;
    height: 80px;
    justify-content: space-between;
  }
`;

export const NavbarLogo = styled.div`
  margin-right: 3rem;
`;
export const Logo = styled.img``;
