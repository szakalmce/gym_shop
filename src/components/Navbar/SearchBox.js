import React from "react";

import {
  SearchWrapper,
  SearchInner,
  InputBox,
  Input,
  CloseButton,
} from "./SearchBoxStyles";

import { MdClose } from "react-icons/md";

const SearchBox = ({ setShowSetBox }) => {
  return (
    <SearchWrapper>
      <SearchInner>
        <InputBox>
          <Input placeholder="search..." />
        </InputBox>
        <CloseButton>
          <MdClose onClick={() => setShowSetBox(false)} />
        </CloseButton>
      </SearchInner>
    </SearchWrapper>
  );
};

export default SearchBox;
