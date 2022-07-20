import styled from 'styled-components';
import Logo from 'assets/images/logo.png';
import SearchBar from './searchBar';

const Header = () => {
  return (
    <HeaderWrap>
      <LogoArea>
        <img src={Logo} alt="logo" />
        <strong>Youtube</strong>
      </LogoArea>
      <SearchBar />
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

export default Header;
