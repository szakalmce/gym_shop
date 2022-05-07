import React from "react";

import { NavLink } from "react-router-dom";
import { Container } from "../../../styles/GlobalStyles";
import { categoriesCards } from "./data";

import {
  Wrapper,
  SingleCategory,
  SingleCategoryWrapper,
  Title,
  Button,
  CategoryText,
} from "./CategoriesCardsStyles";

const CategoriesCards = () => {
  return (
    <Container>
      <Wrapper>
        {categoriesCards.map((item) => {
          return (
            <NavLink key={item.id} to="/">
              <SingleCategoryWrapper>
                <SingleCategory bg={item.img}>
                  <CategoryText>
                    <Title>{item.name}</Title>
                    <Button>View More</Button>
                  </CategoryText>
                </SingleCategory>
              </SingleCategoryWrapper>
            </NavLink>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default CategoriesCards;
