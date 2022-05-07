import React from "react";
import SubsiteTemplate from "../templates/SubsiteTemplate";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyles";

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableLine = styled.tr`
  display: grid;
  grid-template-columns: 40% 20% 30% 10%;

  th {
    text-transform: uppercase;
    font-style: italic;

    &:last-child {
      text-align: right;
    }
  }
  th,
  td {
    border-bottom: 1px solid var(--bg-color);
    padding: 2rem 0;

    &:last-child {
      text-align: right;
    }
  }
`;

const Button = styled.button`
  width: auto;
  display: block;
  margin-top: 1rem;

  text-transform: uppercase;
  padding: 0.75rem;
  background-color: var(--dark-color);
  color: var(--white-color);
  border: none;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;
const OtherWrapper = styled.div``;
const Text = styled.p``;
const Textarea = styled.textarea``;
const SubtotalWrapper = styled.div``;
const Subtotal = styled.p``;

const Cart = () => {
  return (
    <SubsiteTemplate>
      <Wrapper>
        <Container>
          <Table>
            <TableLine>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </TableLine>
            <TableLine>
              <td>Coś tam</td>
              <td>100zł</td>
              <td>2</td>
              <td>200zł</td>
            </TableLine>
            <TableLine>
              <td>Coś tam</td>
              <td>100zł</td>
              <td>2</td>
              <td>200zł</td>
            </TableLine>
          </Table>

          <Button>Continue Shopping</Button>

          <DetailsWrapper>
            <OtherWrapper>
              <Text>Order special instructions</Text>
              <Textarea></Textarea>
            </OtherWrapper>
            <SubtotalWrapper>
              <Subtotal>
                Subtotal <span>3090zł</span>
              </Subtotal>
              <Subtotal>Taxes and shipping calculated at checkout</Subtotal>
              <Button>Check out</Button>
            </SubtotalWrapper>
          </DetailsWrapper>
        </Container>
      </Wrapper>
    </SubsiteTemplate>
  );
};

export default Cart;
