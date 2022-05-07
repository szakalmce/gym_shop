import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { openModalInCart } from "../../../redux/productsReducer";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  background-color: var(--white-color);
  height: 300px;
  width: 300px;
  position: absolute;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
`;

const CloseButton = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--dark-color);

  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
`;

const ModalProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
`;
const ProductName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
  text-align: center;
`;
const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  width: 100%;
  background-color: ${(props) =>
    props.bg === "red"
      ? "var(--red-color)"
      : props.bg === "transparent"
      ? "transparent"
      : "var(--dark-color)"};
  color: ${(props) =>
    props.bg === "transparent" ? "var(--dark-color)" : "var(--white-color)"};
  cursor: pointer;
`;

const CartModal = () => {
  const currentItem = useSelector((state) => state.products.addToCartItem);
  const inCartItems = useSelector((state) => state.products.inCart);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Modal>
        <CloseButton>
          <MdClose onClick={() => dispatch(openModalInCart(false))} />
        </CloseButton>
        <ModalProductWrapper>
          <Img src={currentItem.img} />
          <ProductName>{currentItem.name}</ProductName>
        </ModalProductWrapper>
        <ModalButtons>
          <NavLink to="/cart">
            <Button onClick={() => dispatch(openModalInCart(false))} bg="red">
              View my cart ({inCartItems.length})
            </Button>
          </NavLink>
          <Button>Check out</Button>
          <Button
            onClick={() => dispatch(openModalInCart(false))}
            bg="transparent"
          >
            Continue Shopping
          </Button>
        </ModalButtons>
      </Modal>
    </Wrapper>
  );
};

export default CartModal;
