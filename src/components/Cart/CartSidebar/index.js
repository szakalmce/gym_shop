import React from "react";
import styled from "styled-components";
import { MdClose, MdRestoreFromTrash, MdOutlineWorkOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalInCart,
  openSidebarCart,
  removeCart,
} from "../../../redux/productsReducer";
import { formatCurrecy } from "../../../utils/fn";
import { NavLink } from "react-router-dom";

// $ dodaj linie odstępu przed constami
const Wrapper = styled.div`
  position: fixed;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: var(--white-color);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  top: 0;
  display: flex;
  flex-direction: column;
`;

// TOP

const CartTitle = styled.div`
  border-bottom: 1px solid var(--gray-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Close = styled.div`
  font-size: 1.5rem;
  svg {
    display: block;
    cursor: pointer;
  }
`;

// INNER

const CartInner = styled.div`
  margin: 1rem 0;
  flex: 1;
`;
const CartItem = styled.div`
  padding: 0 0.75rem;
  display: grid;
  grid-template-columns: 25% 65% 10%;
  gap: 0.5rem;
  align-items: center;
`;
const ImgWrapper = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const DetailsWrapper = styled.div``;
const ProductName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
`;
const ProductPrice = styled.p`
  font-size: 0.8rem;
`;

const TrashWrapper = styled.div`
  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

// BOTTOM

const CartFooter = styled.div`
  background-color: var(--bg-color);
  padding: 0.75rem;
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;
const TotalItemsWrapper = styled.div``;
const TotalTitle = styled.p`
  font-weight: bold;
`;
const Total = styled.p``;
const SubtotalItemsWrapper = styled.div``;
const SubtotalTitle = styled(TotalTitle)``;
const Subtotal = styled.p``;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 0.75rem 0;
  background-color: ${(props) =>
    props.red ? "var(--red-color)" : "var(--dark-color)"};
  color: var(--white-color);
  border: none;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  width: 100%;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
const EmptyIcon = styled.div`
  font-size: 4rem;
`;
const EmptyText = styled.div``;

const CartSidebar = () => {
  const cartProducts = useSelector((state) => state.products.inCart);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openSidebarCart(false));
  };

  const handleRemove = (product) => {
    dispatch(removeCart(product.id));
    // $ pousuwaj console logi których nie potrzebujesz
    console.log(product.id);
  };

  const SubtotalValue = cartProducts.reduce((a, b) => {
    return b.inCart * b.price + a;
  }, 0);

  return (
    <Wrapper>
      <CartTitle>
        <Title>Your Shopping Cart</Title>
        <Close>
          <MdClose onClick={() => handleClose()} />
        </Close>
      </CartTitle>
      {cartProducts.length > 0 ? (
        <>
          <CartInner>
            {cartProducts.map((product) => (
              <CartItem key={product.id}>
                <ImgWrapper>
                  <Img src={product.img} />
                </ImgWrapper>
                <DetailsWrapper>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    {product.inCart} x {formatCurrecy(product.price)}
                  </ProductPrice>
                </DetailsWrapper>
                <TrashWrapper>
                  <MdRestoreFromTrash onClick={() => handleRemove(product)} />
                </TrashWrapper>
              </CartItem>
            ))}
          </CartInner>
          <CartFooter>
            <TotalWrapper>
              <TotalItemsWrapper>
                <TotalTitle>Total Item</TotalTitle>
                <Total>{cartProducts.length}</Total>
              </TotalItemsWrapper>
              <SubtotalItemsWrapper>
                <SubtotalTitle>Subtotal</SubtotalTitle>
                <Subtotal>{formatCurrecy(SubtotalValue)}</Subtotal>
              </SubtotalItemsWrapper>
            </TotalWrapper>
            <Buttons>
              <NavLink to="/cart">
                <Button onClick={() => handleClose()}>View Cart</Button>
              </NavLink>
              <Button red>Check out</Button>
            </Buttons>
          </CartFooter>
        </>
      ) : (
        <EmptyWrapper>
          <EmptyIcon>
            <MdOutlineWorkOff />
          </EmptyIcon>
          <EmptyText>You Cart is Currently Empty</EmptyText>
        </EmptyWrapper>
      )}
    </Wrapper>
  );
};

export default CartSidebar;
