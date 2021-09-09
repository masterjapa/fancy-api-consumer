import React from "react";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchRequest from './index';
import * as getRequestStatus from "../../helpers/getRequestStatus";
import { initialData, IRequestData } from "../../helpers/requestDataCommons";
import renderComponent from "../../test/helpers/renderComponent";


describe('<SearchRequest />', () => {
    let getRequestStatusSpy: jest.SpyInstance<Promise<IRequestData>>;

    const props = {
        dataFromLocalStorage: ['opcao1', 'opcao2', 'opcao3'],
    }

    const mockedData: IRequestData = {
        id: 'id-teste',
        status: 'done',
        urls: ['link-a', 'link-b', 'link-c'],
    }

    beforeEach(() => {
        getRequestStatusSpy = jest.spyOn(getRequestStatus, 'default').mockImplementation((id: string) =>  {
            if(id === mockedData.id) {
                return Promise.resolve(mockedData)
            }
            return Promise.resolve(initialData)
        });
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    const typeAndSearch = async (text: string) => {
        userEvent.type(screen.getByRole('textbox'), text);

        userEvent.click(screen.getByRole('button', { name: /buscar solicitação/i } ));

        await screen.findByRole('button', { name: /buscando.../i } );
    }

    it('should render and search a request - success', async () => {
        renderComponent(<SearchRequest {...props} />);

        await typeAndSearch('id-teste')

        expect(getRequestStatusSpy).toHaveBeenCalledWith('id-teste');

        await screen.findByRole('button', { name: /buscar solicitação/i } );

        expect(await screen.findByRole('link', { name: /link-a/i })).toBeInTheDocument();
        
    });

    it('should render and search a request - not found', async () => {
        renderComponent(<SearchRequest {...props} />);

        await typeAndSearch('id-inexistente')

        expect(getRequestStatusSpy).toHaveBeenCalledWith('id-inexistente');

        await screen.findByRole('button', { name: /buscar solicitação/i } );

        expect(await screen.findByRole('heading', { name: /Nenhuma solicitação encontrada/i })).toBeInTheDocument();
        
    });
})