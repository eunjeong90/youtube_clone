import { useRef } from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/images/logo.png';

interface Props {
  onSearch: any;
}

const Header = ({ onSearch }: Props) => {
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
    if (event.code === 'Enter') {
      handleSearch();
    }
  };
  return (
    <HeaderWrap>
      <LogoArea>
        <img src={Logo} alt='logo' />
        <strong>Youtube</strong>
      </LogoArea>
      <SearchBox>
        <input
          ref={inputRef}
          type='search'
          placeholder='Search...'
          onKeyDown={onKeyDown}
        />
        <button type='button' onClick={onClick}>
          👆
        </button>
      </SearchBox>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
`;
const LogoArea = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  img {
    width: 2.2rem;
    height: auto;
    margin-right: 0.5rem;
  }
  strong {
    font-size: 1.6rem;
  }
`;
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

export default Header;
