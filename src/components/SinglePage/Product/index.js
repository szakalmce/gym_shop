import React, { useState } from "react";
import styled from "styled-components";

import { FaRegStar, FaStar, FaHeart, FaChartLine } from "react-icons/fa";
import { formatCurrecy } from "../../../utils/fn";
import { addToWishlistSingleProduct } from "../../../redux/productsReducer";
import { useDispatch } from "react-redux";

const Wrapper = styled.div``;
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
  justify-content: start;
`;
const ProductImg = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const ProductDetails = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RateWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;
const Stars = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  color: ${(props) => props.color};
  font-size: 1.5rem;
  svg {
    color: ${(props) => (props.color ? props.color : "gray")};
  }
`;

const ProductTitle = styled.p`
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
const ProductPriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;
const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--gray-color);
  text-decoration: line-through;
  font-style: italic;
`;
const NewPrice = styled(Price)`
  color: var(--red-color);
  text-decoration: none;
`;
const SaveBox = styled.p`
  background-color: var(--red-color);
  color: var(--white-color);
  font-size: 0.75rem;
  padding: 0.25rem;
  font-weight: bold;
`;

const Line = styled.hr``;

const ProductQuantityForm = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Label = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-color);
  padding: 0 1rem;
`;
const InputButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;
const Input = styled.input`
  width: 50px;
  padding: 0.5rem 1rem;
  border: none;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;
const ProductButtons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  width: 200px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.red ? `var(--red-color)` : `var(--dark-color)`};
  color: var(--white-color);
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.red ? "" : "var(--red-color)")};
  }
`;
const ProductActions = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;
const AddToWishlistWrapper = styled.div``;
const AddToCompareWrapper = styled.div``;
const TabsInner = styled.div``;

const TabsWrapper = styled.div``;
const ProductsDescription = styled.div`
  border: 1px solid var(--dark-color);
  padding: 2rem;
`;

const ProductsReview = styled(ProductsDescription)``;

const TabButtons = styled.div`
  text-align: left;
`;
const TabButton = styled.button`
  font-size: 1.1rem;
  padding: 0.75rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  border: none;
  margin-right: 0.5rem;
  color: var(--white-color);
  background-color: ${(props) =>
    props.value === props.currentTab
      ? "var(--red-color)"
      : "var(--dark-color)"};
  cursor: pointer;
`;

const Product = ({ state }) => {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  // STARS LENGTH

  const stars = [];
  const fullStars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push({
      id: i,
      icon: <FaRegStar />,
    });
  }

  for (let i = 1; i <= state.rate; i++) {
    fullStars.push({
      id: i,
      icon: <FaStar />,
    });
  }

  const handleForm = (value) => {
    if (value === "add") {
      setInputValue(inputValue + 1);
    } else if (value === "remove") {
      setInputValue(inputValue - 1);
      if (inputValue === 1) {
        setInputValue(1);
      }
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToWishlistSingleProduct({
        state,
        inputValue,
      })
    );
    setInputValue(1);
  };

  const handleChangeTab = (tab) => {
    if (tab === "desc") {
      setCurrentTab(1);
    } else if (tab === "reviews") {
      setCurrentTab(2);
    }
  };

  return (
    <Wrapper>
      <ProductWrapper>
        <ProductImg>
          <Img src={state.imgBig} />
        </ProductImg>
        <ProductDetails>
          <RateWrapper>
            <Stars>
              {stars.map((item, index) => (
                <span key={index}>{item.icon}</span>
              ))}
            </Stars>
            <Stars color="gold">
              {fullStars.map((item, index) => (
                <span key={index}>{item.icon}</span>
              ))}
            </Stars>
          </RateWrapper>
          <ProductTitle>{state.name}</ProductTitle>
          <ProductPriceWrapper>
            <Price>{formatCurrecy(state.price)}</Price>
            <NewPrice>{formatCurrecy(state.newPrice)}</NewPrice>
            <SaveBox>
              {((state.newPrice * 100) / state.price - 100).toFixed(0)}%
            </SaveBox>
          </ProductPriceWrapper>

          <Line />

          <ProductQuantityForm>
            <Label>Quantity</Label>
            <InputWrapper>
              <InputButton onClick={() => handleForm("remove")}>-</InputButton>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="number"
              />
              <InputButton onClick={() => handleForm("add")}>+</InputButton>
            </InputWrapper>
          </ProductQuantityForm>

          <ProductButtons>
            <Button onClick={() => handleAddToCart(state)} red>
              Add to cart
            </Button>
            <Button>Buy it now</Button>
          </ProductButtons>

          <ProductActions>
            <AddToWishlistWrapper>
              <FaHeart /> Add to wishlist
            </AddToWishlistWrapper>
            <AddToCompareWrapper>
              <FaChartLine /> Add to compare
            </AddToCompareWrapper>
          </ProductActions>
        </ProductDetails>
      </ProductWrapper>

      <TabsWrapper>
        <TabButtons>
          <TabButton
            value={1}
            currentTab={currentTab}
            onClick={() => handleChangeTab("desc")}
            red
          >
            Description
          </TabButton>
          <TabButton
            value={2}
            currentTab={currentTab}
            onClick={() => handleChangeTab("reviews")}
          >
            Reviews
          </TabButton>
        </TabButtons>
        <TabsInner>
          {currentTab === 1 ? (
            <ProductsDescription>{state.desc}</ProductsDescription>
          ) : (
            <ProductsReview>Elo</ProductsReview>
          )}
        </TabsInner>
      </TabsWrapper>
    </Wrapper>
  );
};

export default Product;
