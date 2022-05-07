import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import logoImg from "../../media/imgs/logo_3_200x.webp";

import Navigation from "./Navigation";

import { MdMenu } from "react-icons/md";

import { Wrapper, NavbarLogo, Logo, NavbarInner } from "./NavbarStyles";
import Icons from "./Icons";
import SearchBox from "./SearchBox";
import { device } from "../../styles/queries";
import { NavLink } from "react-router-dom";
import CartSidebar from "../Cart/CartSidebar";

const Navbar = ({ bg, position }) => {
  const showCart = useSelector((state) => state.products.openSideCart);

  const [showSearchBox, setShowSetBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = () => {
    setShowSetBox(!showSearchBox);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const HamburgerIcon = styled.div`
    flex: 1;
    display: none;
    color: var(--white-color);
    font-size: 1.5rem;

    svg {
      cursor: pointer;
    }

    @media ${device.mobile} {
      display: block;
    }
  `;

  return (
    <>
      <Wrapper position={position} bg={bg}>
        <NavbarInner>
          <HamburgerIcon>
            <MdMenu onClick={() => handleShowMenu()} />
          </HamburgerIcon>
          <NavbarLogo>
            <NavLink to="/">
              <Logo src={logoImg} />
            </NavLink>
          </NavbarLogo>

          <Navigation show={showMenu} />

          <Icons handleSearch={handleSearch} />
        </NavbarInner>
      </Wrapper>

      {/* SEARCHBOX */}
      {showSearchBox ? <SearchBox setShowSetBox={setShowSetBox} /> : null}

      {/* CART NAVBAR */}
      {showCart ? <CartSidebar /> : null}
    </>
  );
};

export default Navbar;
