import React, { useState } from "react";
import { Card, Container, Form, InputAutocomplete } from "../../components";
import parseItemsToAutocompleteData from "../../components/InputAutocomplete/parseItemsToAutocompleteData";
import getRequestStatus from "../../helpers/getRequestStatus";
import { initialData } from "../../helpers/requestDataCommons";
import RequestStatus from "../RequestStatus";
import SubmitButton from '../SubmitButton';

interface ISearchRequestProps {
  dataFromLocalStorage: string[],
}

export const SearchRequest: React.FC<ISearchRequestProps> = ({ dataFromLocalStorage }) => {
  const [id, setId] = useState("");
  const [requestStatus, setRequestStatus] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const autoCompleteData = parseItemsToAutocompleteData(
    dataFromLocalStorage
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(id);
  };

  const onSearch = async (id: string) => {

    setIsLoading(true);

    const retrievedRequest = await getRequestStatus(id);

    setRequestStatus(retrievedRequest);

    setIsLoading(false);
  };

  const onChange = (value: string) => {
    setId(value);
  };

  const buttonText = isLoading ? 'Buscando...' : 'Buscar Solicitação'

  return (
    <Card isLoading={isLoading}>
      <Container responsive>
        <h1>Buscar solicitação cadastrada</h1>
        <Form onSubmit={onSubmit}>
          <InputAutocomplete
            onClickValue={onSearch}
            onChange={onChange}
            autoCompleteData={autoCompleteData}
          />
          <SubmitButton value={buttonText} />
        </Form>
        <RequestStatus request={requestStatus} />
      </Container>
    </Card>
  );
};
