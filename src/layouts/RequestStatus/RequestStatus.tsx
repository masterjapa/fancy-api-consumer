import React from "react";
import styled from "styled-components";
import { StyledBadge } from "../../components";
import { mobileStyles } from "../../components/styles";
import { IRequestData } from '../../helpers/requestDataCommons';
import DetailsList from "./DetailsList";

interface IRequestStatusProps {
  request: IRequestData,
}

const StyledResults = styled.div`
  margin-top: 2rem;
  width: 100%;

  ${mobileStyles(`
    text-align: center;
  `)}
`;

const StyledBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;

  div {
    flex: 1;
  
    &:first-child {
      margin-right: 0.5rem;
    }
  }

  ${mobileStyles(`
    width: 100%;
  `)}

`

export const RequestStatus: React.FC<IRequestStatusProps> = ({ request }) => {

    const hasError = request && (typeof request.status !== 'string' || request.error);

    const renderErrorResult = () => {
      if(!hasError) {
        return null;
      }
    
      return <h4>{request.error || "Nenhuma solicitação encontrada"}</h4>
    }

    const getStatusText = (status: string) => {
      return ({
        active: 'Ativa',
        done: 'Completa'
      })[status]
    }

    const renderResult = () => {
      if(hasError) {
        return null;
      }

      return (
        <>
          <StyledBadgesContainer>
            <StyledBadge badgeType="default">{request.id}</StyledBadge>
            <StyledBadge badgeType={`${request.status}`}>{getStatusText(`${request.status}`)}</StyledBadge>
          </StyledBadgesContainer>
          <DetailsList items={request.urls} />
        </>
      )

    }

    return(
        <StyledResults>
          <h2>Informações da solicitação:</h2>
          {renderErrorResult()}
          {renderResult()}
        </StyledResults>
    )

}