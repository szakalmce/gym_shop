import React from "react";
import styled from "styled-components";
import SingleCard from "./SingleCard";
import { cardsData } from "./data";

import { device } from "../../../styles/queries";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Cards = () => {
  return (
    <Wrapper>
      {cardsData.map((card) => (
        <SingleCard key={card.id} {...card} />
      ))}
    </Wrapper>
  );
};

export default Cards;
