import React from 'react';
import './app.css';
import GlobalStyle from './globalStyles';
import Container from 'components/container';
import Header from 'components/header';
import ItemCard from 'components/itemCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ItemCard />
      </Container>
    </>
  );
}

export default App;
