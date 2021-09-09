import React, { useState } from "react";
import styled from 'styled-components';

interface IDetailsListProps {
    items?: string[]
}

const ITEMS_PER_VIEW = 10;

const StyledListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

const StyledListItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        padding: 0.5rem 0.5rem 0.5rem 0;
        word-break: break-word;
        text-align: left;
    }
`;

const StyledItemsTotal = styled.span`
    font-size: 0.875rem;
    margin-top: 1rem;
    margin-left: auto;
    color: ${({ theme }) => theme.primaryDark}
`

const StyledLoadMoreButton = styled.button`
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.secondaryLight};

    border-radius: 1rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border: none;
    margin: 1rem auto;
    width: 15rem;
`;

export const DetailsList: React.FC<IDetailsListProps> = ({ items = [] }) => {
    const [maxItems, setMaxItems] = useState(ITEMS_PER_VIEW >= items.length ? items.length : ITEMS_PER_VIEW);
    const isEmpty = (!items || !items.length);

    const updateMaxItems = () => {
        setMaxItems((current) => {
            const nextPage = current + ITEMS_PER_VIEW;

            if(items.length <= nextPage) {
                return items.length;
            }

            return nextPage;
        })
    }

    const renderLoadMoreButton = () => {

        if (isEmpty || items.length <= maxItems) {
            return null;
        }

        return <StyledLoadMoreButton onClick={updateMaxItems}>
            {`Carregar mais`}
        </StyledLoadMoreButton>
    }

    const renderListItems = () => {
        return (
        <StyledListItemsContainer>
            {items.slice(0, maxItems).map((item) => <a key={item} href={item} target="_blank" rel="noreferrer">{item}</a>)}
            {isEmpty && <span>{'Nenhuma url encontrada.'}</span>}
        </StyledListItemsContainer>
        )
    }

    const renderItemsNumberInfo = () => {
        if(isEmpty) {
            return null;
        }
        return(
            <StyledItemsTotal>{`Exibindo ${maxItems} de ${items.length}`}</StyledItemsTotal>
        )
    }


    return (
        <StyledListContainer>
            <h4>Urls: {items.length}</h4>
            {renderListItems()}
            {renderItemsNumberInfo()}
            {renderLoadMoreButton()}
        </StyledListContainer>
    )
}
