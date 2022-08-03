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
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  > div:nth-child(1) {
    flex: 1 1 70%;
  }
  > div:nth-child(2) {
    flex: 1 1 30%;
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column;
    > div:nth-child(2) {
      margin-left: 0;
    }
  }
`;

export default Container;
