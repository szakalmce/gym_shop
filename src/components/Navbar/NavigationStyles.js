import styled from "styled-components";
import { device } from "../../styles/queries";

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  position: relative;

  @media ${device.mobile} {
    display: ${(props) => (props.show ? "block" : "none")};
    position: absolute;
    background-color: var(--dark-light-color);
    left: 0;
    top: 100%;
    right: 0;
  }
`;

export const SubMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  opacity: 0;
  visibility: hidden;
  padding-top: 2rem;

  @media ${device.mobile} {
    display: table;
    opacity: 1;
    visibility: visible;
    position: relative;
    padding: 0;
    width: 100%;
    text-transform: uppercase;
    display: ${(props) => (props.toggle ? "block" : "none")};
  }
`;

export const NavSubMenu = styled.ul`
  background-color: #eee;
  padding: 1rem;
  column-count: 3;
  column-gap: 3rem;

  a {
    @media ${device.mobile} {
      color: var(--white-color);

      &:hover {
        color: var(--red-color);
      }
    }
  }

  @media ${device.mobile} {
    column-count: 1;
    width: 100%;
    background-color: var(---dark-light-color);
  }
`;

export const NavItem = styled.li`
  position: relative;

  @media ${device.mobile} {
    border-bottom: 1px solid var(--dark-color);
    padding: 1rem 0.5rem;
    z-index: 999;
  }

  &:last-child {
    border: none;
  }

  &:hover > ${SubMenuWrapper} {
    opacity: 1;
    visibility: visible;
  }
`;
export const Link = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 0.25rem;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #fff;

    @media ${device.mobile} {
      &:hover {
        color: var(--red-color);
      }
    }
  }

  &::after {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0rem;
    content: "";
    background-color: var(--red-color);
    transform: translateX(-110%);
    transition: all 0.25s ease-in-out;

    @media ${device.mobile} {
      display: none;
    }
  }

  &:hover::after {
    transform: translateX(0px);
    color: red;
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const NavSubItem = styled.li`
  padding: 0.5rem;
  width: 100%;

  a {
    min-width: 100px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const NavSubLink = styled.div``;
