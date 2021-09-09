import styled from 'styled-components';
import { IRequestData } from '../../helpers/requestDataCommons';


interface IBadgeStyles { 
  badgeType: Pick<IRequestData, 'status'> & string,
};


export const StyledBadge = styled.div<IBadgeStyles>`
    background: ${({ theme, badgeType }) => theme.badgeColors[badgeType]};
    color: ${({ theme }) => theme.secondaryLight};
    
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
`;