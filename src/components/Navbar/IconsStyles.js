import styled from "styled-components";
import { device } from "../../styles/queries";

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
  height: 60px;
  color: #fff;

  @media ${device.mobile} {
    gap: 0.5rem;
    font-size: 1.25rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  cursor: pointer;
`;
export const LoginMenu = styled.div`
  display: flex;
`;
export const Login = styled.ul``;
export const LoginItem = styled.li``;
export const LoginLink = styled.a``;
export const Cart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const Badge = styled.div`
  background-color: var(--red-color);
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  margin-left: 0.25rem;
`;
