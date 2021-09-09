import React, { forwardRef } from "react";
import styled from 'styled-components';
import { mobileStyles } from "../../../components/styles";

type Message = 'success' | 'error' | string

interface IFeedbackSectionProps {
    message: Message,
}

const StyledContainer = styled.div<IFeedbackSectionProps>`
    height: 4rem;
    display: flex;
    align-items: center;

    h4 {
        visibility: ${({ message }) => !message ? 'hidden' : 'visible'};
        color: ${({ message, theme }) => message === 'error' ? 'red' : theme.badgeColors.done};
        margin: 0;
    }

    ${mobileStyles(`
        justify-content: center;
    `)}
`

export const FeedbackSection = forwardRef<HTMLDivElement, IFeedbackSectionProps>(({ message }, ref) => {

    const getMessageText = () => {
        const success = message === 'success' && 'Solicitação criada com sucesso';
        const error = message === 'error' && 'Erro ao criar solicitação';

        return (success || error || '');
    }

    return(
        <StyledContainer message={message} ref={ref}>
            <h4>{getMessageText()}</h4>
        </StyledContainer>
    )
})