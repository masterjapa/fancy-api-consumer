import axios, { AxiosRequestConfig } from "axios";
import createRequest from "./createRequest";
import { IRequestData } from "./requestDataCommons";

describe('createRequest', () => {
    let axiosSpy: jest.SpyInstance<Promise<unknown>, [config: AxiosRequestConfig]>;

    const mockedData: IRequestData = {
        id: 'test',
    }

    beforeEach(() => {
        axiosSpy = jest.spyOn(axios, 'request').mockImplementation(() =>  Promise.resolve({ data: mockedData }));
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('should create request', async () => {
        const request = await createRequest('mykey');

        expect(request).toEqual({ id: 'test' });
        
        expect(axiosSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                keyword: 'mykey'
            }
        }));
    });

    it('should return initial data when error', async () => {

        axiosSpy = jest.spyOn(axios, 'request').mockRejectedValue(() =>  Promise.resolve({ data: undefined }))

        const request = await createRequest('mykey');

        expect(request).toEqual({ 
            id: '',
            error: 'Erro ao criar solicitação'
        });
    });

    it('should return initial data when empty data returned', async () => {

        axiosSpy = jest.spyOn(axios, 'request').mockImplementation(() =>  Promise.resolve({ data: undefined }))
    
        const request = await createRequest('myemptykey');

        expect(request).toEqual({ id: '' });

        expect(axiosSpy).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                keyword: 'myemptykey'
            }
        }));
    });
})