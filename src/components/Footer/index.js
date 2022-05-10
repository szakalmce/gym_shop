import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import { footerData } from "./data";

// $ dodaj linie odstępu przed constami

const bgImage =
  "https://cdn.shopify.com/s/files/1/0550/8130/4322/files/footer-bg.jpg?v=1634555462";

const FooterWrapper = styled.footer`
  height: 700px;
  background-image: url(${bgImage});
  margin-top: -7rem;
`;

const Wrapper = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
`;
const FooterInner = styled.div`
  padding-top: 15rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: auto;
`;
const SingleColumn = styled.div`
  color: var(--white-color);
  text-align: left;

  a {
    text-decoration: none;
    color: var(--white-color);

    &:hover {
      color: var(--red-color);
    }
  }
`;
const ColumnTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    content: "";
    width: 40px;
    height: 2px;
    background-color: var(--red-color);
    left: 0;
    bottom: -1rem;
  }
`;
const ColumnItems = styled.p`
  display: block;
  margin-bottom: 0.75rem;
  display: flex;

  span {
    margin-right: 1.5rem;
  }
`;

const WrapperIcon = styled.span`
  color: var(--red-color);
`;

const SocialItem = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;

  a {
    font-size: 1.2rem;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--gray-color);

    &:hover {
      background-color: var(--red-color);
      color: var(--white-color);
    }
  }
`;

const SubFooterInner = styled.div`
  padding: 2rem 0;
  border-top: 1px solid var(--white-color);
  color: var(--white-color);
  font-size: 0.75rem;
`;
const SubFooterContent = styled.div`
  display: flex;
`;
const Copy = styled.div`
  a {
    color: var(--white-color);
    text-decoration: none;
    font-size: inherit;

    &:hover {
      color: var(--red-color);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <FooterInner>
            {footerData.map((column, index) => {
              return (
                <SingleColumn key={index}>
                  {column.map((item, index) => (
                    <div key={index}>
                      {item.title ? (
                        <ColumnTitle>{item.value}</ColumnTitle>
                      ) : (
                        <>
                          <NavLink to="/">
                            <ColumnItems>
                              {item.icon ? (
                                <WrapperIcon>{item.icon}</WrapperIcon>
                              ) : null}{" "}
                              {item.value}
                            </ColumnItems>
                          </NavLink>
                        </>
                      )}
                      {item.socialIcons ? (
                        <SocialItem>
                          {item.socialIcons.map((icon, index) => (
                            <NavLink key={index} to="/">
                              {icon}
                            </NavLink>
                          ))}
                        </SocialItem>
                      ) : null}
                    </div>
                  ))}
                </SingleColumn>
              );
            })}
          </FooterInner>
          <SubFooterInner>
            <SubFooterContent>
              {/*  // $ Powered by Shopify ? */}
              <Copy>
                &copy; 2022, <NavLink to="/">Bodyflex Demo Store</NavLink>{" "}
                Powered by Shopify
              </Copy>
            </SubFooterContent>
          </SubFooterInner>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
