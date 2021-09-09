import React, { useState, useRef } from 'react';
import { Card, Container, Form, Input } from '../../components';
import createRequest from '../../helpers/createRequest';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SubmitButton from '../SubmitButton';
import FeedbackSection from './FeedbackSection';

interface ICreateRequestProps {
  saveItemToLocalStorage: (id: string, keyword: string) => void
}

export const CreateRequest: React.FC<ICreateRequestProps> = ({ saveItemToLocalStorage }) => {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const feedbackRef = useRef(null);
  
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
  
      const { id } = await createRequest(keyword);
  
      if (id) {
        saveItemToLocalStorage(id, keyword);
      }

      setFeedbackMessage(id ? 'success' : 'error')
  
      setKeyword('');

      setIsLoading(false);
    }

    const buttonText = isLoading ? 'Criando...' : 'Criar Solicitação';

    useOnClickOutside({
      ref: feedbackRef,
      onClick: () => setFeedbackMessage(''),
  });

    return (
        <Card isLoading={isLoading}>
            <Container responsive>
              <h1>Cadastro de solicitação</h1>
              <Form onSubmit={onSubmit}>
                  <Input onChange={(e) => setKeyword(e.target.value)} type="text" value={keyword} />
                  <SubmitButton value={buttonText} />
              </Form>
          </Container>
          <FeedbackSection message={feedbackMessage} ref={feedbackRef} />
        </Card>
    )
}
