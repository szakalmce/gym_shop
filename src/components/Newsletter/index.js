import React from "react";

import styled from "styled-components";
import { Title } from "../../styles/GlobalStyles";

const Wrapper = styled.div`
  background-color: var(--red-color);
  height: 650px;
  margin-top: ${(props) => `${props.margin}rem`};
  clip-path: polygon(0 0, 100% 0, 100% 550px, 0% 100%);
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 2rem;
`;

const FormInner = styled.div`
  margin-top: -100px;

  width: 600px;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 1rem;
  height: 50px;
`;
const Input = styled.input`
  flex-basis: 75%;
  height: 100%;
  padding: 0.5rem;
  outline: none;

  &:active,
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const FormButton = styled.button`
  flex-basis: 25%;
  height: 100%;
  background-color: var(--dark-color);
  border: none;
  color: var(--white-color);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  font-style: italic;
  cursor: pointer;
`;

const Newsletter = ({ margin }) => {
  return (
    <Wrapper margin={margin}>
      <FormWrapper>
        <FormInner>
          <Title color="white">GET OUR EMAIL LETTER</Title>
          <Form>
            <Input required placeholder="your email..." />
            <FormButton>Subscribe</FormButton>
          </Form>
        </FormInner>
      </FormWrapper>
    </Wrapper>
  );
};

export default Newsletter;
