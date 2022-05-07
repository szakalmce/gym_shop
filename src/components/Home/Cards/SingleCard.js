import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaLongArrowAltRight } from "react-icons/fa";

import {
  Wrapper,
  CardInner,
  IconWrapper,
  Desc,
  Link,
  Title,
} from "./SingleCardStyles";

const SingleCard = ({ title, bg, desc, icon, arrow }) => {
  return (
    <Wrapper bg={bg}>
      <CardInner>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Link color={arrow}>
          <NavLink color={arrow} to="/">
            Our trainers
          </NavLink>
          <FaLongArrowAltRight />
        </Link>
      </CardInner>
    </Wrapper>
  );
};

export default SingleCard;
