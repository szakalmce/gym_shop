import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #000;
  z-index: 300;
`;

export const SearchInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const InputBox = styled.div`
  width: 300px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
`;
export const CloseButton = styled.div`
  margin-left: 0.5rem;
  svg {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
