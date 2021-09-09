import React from 'react';
import styled from 'styled-components';
import { mobileStyles } from '../styles';

const StyledForm = styled.form`
  display: flex;
  width: 100%;

  ${mobileStyles(`
    align-items: center;
    flex-wrap: wrap;
  `)}
`;

interface IFormProps {
   children: React.ReactNode,
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form: React.FC<IFormProps> = ({ onSubmit, children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}