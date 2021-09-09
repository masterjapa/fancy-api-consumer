import styled from 'styled-components';
import { mobileStyles } from '../styles';

export const StyledInput = styled.input`
    padding: 1rem;
    font-size: 1rem;
    width: 25rem;
    border-radius: 0.5rem;
    flex: 1;

    ${mobileStyles(`
      width: 100%;
      flex: auto;
    `)}
`;