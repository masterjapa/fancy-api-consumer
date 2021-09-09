
import React from 'react';
import styled from 'styled-components';
import { Input } from '../../components';
import { mobileStyles } from '../../components/styles';

const StyledInputSubmit = styled(Input)`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.primaryDark};
  border: none;
  color: ${({ theme }) => theme.secondaryLight};
  font-size: 1.5rem;
  letter-spacing: 0.1rem;

  ${mobileStyles(`
    margin-top: 1rem;
    margin-left: 0;
    font-size: 1rem;
  `)}
`;

interface ISubmitButtonProps {
  value: string
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({ value }) => {
  return (
    <StyledInputSubmit type="submit" value={value} />
  );
}