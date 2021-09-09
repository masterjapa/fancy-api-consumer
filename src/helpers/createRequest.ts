import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { baseUrl, initialData, IRequestData} from './requestDataCommons';

const createRequest = async (keyword: string): Promise<IRequestData> => {
    try {
        const options: AxiosRequestConfig = {
            method: 'POST',
            url: `${baseUrl}/crawl`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                keyword
            }
        }
        const { data = initialData }: AxiosResponse<IRequestData> = await axios.request(options);

        return data;
    } catch (error) {
        console.error("trtamento de erro aqui", error);
        return {
            ...initialData,
            error: 'Erro ao criar solicitação'
        };
    }
}

export default createRequest;