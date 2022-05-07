import React from "react";
import { useLocation } from "react-router-dom";
import SubsiteTemplate from "../templates/SubsiteTemplate";

import styled from "styled-components";
import { Container } from "../styles/GlobalStyles";
import Product from "../components/SinglePage/Product";

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const SingleProduct = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <SubsiteTemplate>
      <Container>
        <Wrapper>
          <Product state={state} />
        </Wrapper>
      </Container>
    </SubsiteTemplate>
  );
};

export default SingleProduct;
