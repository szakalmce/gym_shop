import React, { useState } from "react";
import { Container, Title } from "../../../styles/GlobalStyles";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { formatCurrecy } from "../../../utils/fn";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  addToCart,
  addToWishlist,
  getAddToCartItem,
  openModalInCart,
  removeWishlist,
} from "../../../redux/productsReducer";
import { useDispatch, useSelector } from "react-redux";

import {
  BsFillEyeFill,
  BsFillBasket3Fill,
  BsHeart,
  BsHeartFill,
  BsArrowsAngleContract,
  BsCheck,
} from "react-icons/bs";

const ProductIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 9999999;
`;

const SingleProduct = styled.div`
  padding: 1rem 0.5rem 3.5rem 0.5rem;
  width: 100%;
  position: relative;

  &:hover ${ProductIcons} {
    opacity: 1;
    visibility: visible;
  }
`;

const ProductImg = styled.div``;

const Img = styled.img`
  width: 100%;
  display: block;
`;
const ProductDetails = styled.div``;
const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  font-style: italic;
`;
const PriceWrapper = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const DiscrountPrice = styled(Name)`
  color: var(--red-color);
`;

const Price = styled(Name)`
  color: ${(props) => (props.disc ? "gray" : "var(--red-color)")};
  text-decoration: ${(props) => (props.disc ? "line-through" : null)};
`;

const PromotionBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--white-color);
  background-color: var(--red-color);
  padding: 0.5rem;
`;

const IconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const IconWrapper = styled.li`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-color);
  cursor: pointer;

  &:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    top: -70%;
    background-color: #ddd;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    color: var(--white-color);
    background-color: var(--dark-color);
    border-radius: 10px;
  }

  &:hover {
    background-color: var(--red-color);
  }

  svg {
    color: var(--white-color);
  }
`;

const RecentProducts = () => {
  // $ pousuwaj niepotrzebne consty
  const [inWishlist, setInWishlist] = useState(false);

  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state) => state.products.wishlist);
  const allProducts = useSelector((state) => state.products.allProducts);

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={`slider-arrow-right slick-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <MdKeyboardArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={`slider-arrow-left slick-arrow`}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        <MdKeyboardArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const array = allProducts.slice(0, 5);

  // ADD TO CART

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // ADD TO WISHLIST

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleOpenModalInCart = () => {
    dispatch(openModalInCart(true));
  };

  return (
    <Container>
      <Title style={{ marginBottom: "2rem" }}>RECENT ARRIVALS</Title>
      <Slider {...settings}>
        {array.map((item, index) => {
          return (
            <SingleProduct key={index}>
              {item.discount ? (
                <PromotionBadge>
                  {((item.newPrice * 100) / item.price - 100).toFixed(0)}%
                </PromotionBadge>
              ) : null}
              <NavLink
                style={{ textDecoration: "none" }}
                key={item.id}
                to={`products/${item.name}`}
                state={{ ...item }}
              >
                <ProductImg>
                  <Img src={item.img} />
                </ProductImg>
                <ProductDetails>
                  <Name>{item.name}</Name>
                  <PriceWrapper>
                    {item.discount ? (
                      <DiscrountPrice>
                        {formatCurrecy(item.newPrice)}
                      </DiscrountPrice>
                    ) : null}

                    <Price disc={item.discount}>
                      {formatCurrecy(item.price)}
                    </Price>
                  </PriceWrapper>
                </ProductDetails>
              </NavLink>
              <ProductIcons>
                <IconsList>
                  <IconWrapper data-tooltip="Show more">
                    <BsFillEyeFill />
                  </IconWrapper>
                  <IconWrapper
                    onClick={() => {
                      handleAddToCart(item);
                      dispatch(getAddToCartItem(item));
                      handleOpenModalInCart();
                    }}
                    data-tooltip="Add to cart"
                  >
                    <BsFillBasket3Fill />
                  </IconWrapper>

                  {item.inWishlist ? (
                    <IconWrapper
                      onClick={() => {
                        dispatch(removeWishlist(item));
                      }}
                      data-tooltip="Remove Form Wishlist"
                    >
                      <BsHeartFill />
                    </IconWrapper>
                  ) : (
                    <IconWrapper
                      onClick={() => handleAddToWishlist(item)}
                      data-tooltip="Add to wishlist"
                    >
                      <BsHeart />
                    </IconWrapper>
                  )}

                  <IconWrapper data-tooltip="Compare list">
                    <BsArrowsAngleContract />
                  </IconWrapper>
                </IconsList>
              </ProductIcons>
            </SingleProduct>
          );
        })}
      </Slider>
    </Container>
  );
};

export default RecentProducts;
