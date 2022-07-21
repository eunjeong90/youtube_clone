import { useRef } from "react";
import styled from "styled-components";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };
  return (
    <SearchBox>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onClick}>
        👆
      </button>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  input {
    width: 100%;
    padding: 0.5rem 0.1rem;
  }
  button {
    background-color: gray;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
  }
`;
export default SearchBar;
