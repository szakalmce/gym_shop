import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container, Title } from "../../../styles/GlobalStyles";
import { recentBlogData } from "./data";

const Wrapper = styled.div`
  margin: 5rem 0;
  text-align: center;
  position: relative;
  z-index: 999;
`;

const PostsWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;

  a {
    text-decoration: none;
  }
`;
const Post = styled.div`
  width: 383.5px;
  height: 500px;
  background-image: ${(post) => `url(${post.bg})`};
  background-size: cover;
  background-position: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  color: var(--white-color);
  text-transform: uppercase;
  font-weight: bold;

  transform: ${(props) => `translateX(${props.position * -383.5}px);`};

  &:hover {
    background-size: 110%;
  }
`;
const PostData = styled.p`
  background-color: var(--red-color);
  padding: 0.75rem;
  align-self: start;
  margin-bottom: 0.5rem;
`;
const PostText = styled.p`
  text-align: left;
`;

const ArrowsWrapper = styled.div``;
const Arrow = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 50%;
  z-index: 100;
  left: ${(props) => (props.position === "left" ? "-5%" : null)};
  right: ${(props) => (props.position === "right" ? "-5%" : null)};
  cursor: pointer;
`;

const RecentBlogSlider = () => {
  const [slide, setSlide] = useState(0);

  const postsLength = recentBlogData.length - 3;

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlide(slide - 1);
      if (slide === 0) {
        setSlide(postsLength);
      }
    }
    if (direction === "right") {
      setSlide(slide + 1);
      if (slide === postsLength) {
        setSlide(0);
      }
    }
  };

  console.log(slide);

  return (
    <Container>
      <Title>FROM OUR BLOG</Title>
      <Wrapper>
        <ArrowsWrapper>
          <Arrow onClick={() => handleSlide("left")} position="left">
            <MdKeyboardArrowLeft />
          </Arrow>
          <Arrow onClick={() => handleSlide("right")} position="right">
            <MdKeyboardArrowRight />
          </Arrow>
        </ArrowsWrapper>
        <PostsWrapper>
          {recentBlogData.map((post) => {
            return (
              <NavLink key={post.id} to="/">
                <Post position={slide} bg={post.img}>
                  <PostData>{post.data}</PostData>
                  <PostText>{post.name}</PostText>
                </Post>
              </NavLink>
            );
          })}
        </PostsWrapper>
      </Wrapper>
    </Container>
  );
};

export default RecentBlogSlider;
