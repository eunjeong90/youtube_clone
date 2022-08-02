import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <MainContainer>
      <Section>{children}</Section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  > div:nth-child(1) {
    flex: 1 1 70%;
  }
  > div:nth-child(2) {
    flex: 1 1 30%;
  }
`;

export default Container;
