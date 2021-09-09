import React from 'react';
import styled from 'styled-components';
import { responsiveStyles } from '../styles';

interface IContainerProps {
  responsive?: boolean,
  children: React.ReactNode,
}

const StyledContainer = styled.div<IContainerProps>`
  ${({ responsive }) => responsive ? responsiveStyles : ''}
`

export const Container: React.FC<IContainerProps> = ({ children, responsive }) => {
  return (
    <StyledContainer responsive={responsive}>
      {children}
    </StyledContainer>
  );
}