import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

export default Container;
