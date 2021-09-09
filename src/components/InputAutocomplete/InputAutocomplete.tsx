import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { mobileStyles } from "../styles";
import { IAutoCompleteItem } from "./parseItemsToAutocompleteData";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const StyledAutoCompleteContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  ${mobileStyles(`
    width: 100%;
    flex: auto;
  `)}
`;

const StyledListContainer = styled.ul`
  position: absolute;
  top: 4rem;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${({ theme }) => theme.secondaryLight};
  box-shadow: 0px 2px 7px 3px rgb(0 0 0 / 6%);
  width: 25rem;
  max-height: 10rem;
  overflow: auto;
  width: 100%;
`;

const StyledListItem = styled.li`
  padding: 1rem;
  text-align: left;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.secondaryLight};
    text-decoration: underline;
  }
`;

interface IInputAutocompleteProps {
  onClickValue: (id: string) => void;
  onChange: (value: string) => void;
  autoCompleteData: IAutoCompleteItem[];
}

export const InputAutocomplete: React.FC<IInputAutocompleteProps> = ({
  onClickValue,
  onChange,
  autoCompleteData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const inputAutoCompleteRef = useRef(null);

  const onClickItem = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const { value = "" } =
      autoCompleteData.find(({ id }) => id === e.target.id) || {};

    setInputValue(value);

    onClickValue(e.target.id);

    setShowAutoComplete(false);
  };

  const renderAutoCompleteItem = ({ id, value }: IAutoCompleteItem) => (
    <StyledListItem
      onClick={onClickItem}
      key={id}
      id={id}
    >{`${value} - ${id}`}</StyledListItem>
  );

  const renderAutocompleteList = () => {
    if (!autoCompleteData.length) {
      return null;
    }

    return autoCompleteData
      .filter(({ value }) => value.includes(inputValue))
      .map((item) => renderAutoCompleteItem(item));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
    onChange(value);
  };

  const onClickOutside = (hasClickedOutside: boolean) => {
    setShowAutoComplete(!hasClickedOutside)
  }

 useOnClickOutside({
    ref: inputAutoCompleteRef,
    onClick: onClickOutside,
  });

  return (
    <StyledAutoCompleteContainer ref={inputAutoCompleteRef}>
      <Input
        onChange={onChangeInput}
        type="text"
        value={inputValue}
        onClick={() => setShowAutoComplete(true)}
        aria-label="input-autocomplete"
      />
      {showAutoComplete && (
        <StyledListContainer>{renderAutocompleteList()}</StyledListContainer>
      )}
    </StyledAutoCompleteContainer>
  );
};
