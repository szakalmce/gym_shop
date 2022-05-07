import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdSearch, MdShoppingBasket, MdOutlinePerson } from "react-icons/md";
import { openSidebarCart } from "../../redux/productsReducer";

import {
  NavbarIcons,
  SearchBox,
  Login,
  LoginMenu,
  LoginLink,
  Badge,
  Cart,
  LoginItem,
} from "./IconsStyles";

const Icons = ({ handleSearch }) => {
  const currentItemsInCart = useSelector((state) => state.products.inCart);
  const dispatch = useDispatch();

  // SHOW NAVBAR CART

  const handleShowCart = () => {
    dispatch(openSidebarCart(true));
  };

  return (
    <NavbarIcons>
      <SearchBox>
        <MdSearch onClick={() => handleSearch()} />
      </SearchBox>
      <LoginMenu>
        <MdOutlinePerson />
        <Login>
          <LoginItem>
            <LoginLink></LoginLink>
          </LoginItem>
        </Login>
      </LoginMenu>
      <Cart onClick={() => handleShowCart()}>
        <MdShoppingBasket />
        <Badge>{currentItemsInCart.length}</Badge>
      </Cart>
    </NavbarIcons>
  );
};

export default Icons;
