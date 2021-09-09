import styled from 'styled-components';
import { fadingLoader, mobileStyles } from '../styles';

interface ICardStyles { 
  isLoading: boolean,
};


export const StyledCard = styled.section<ICardStyles>`
    background: ${({ theme }) => theme.secondaryLight};
    box-shadow: 0px 2px 7px 3px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    padding: 3rem;
    margin: 2rem 1rem;

    ${({ isLoading }) => isLoading ? fadingLoader : ''}

    ${mobileStyles(`
      padding: 1.5rem;
    `)}
`;