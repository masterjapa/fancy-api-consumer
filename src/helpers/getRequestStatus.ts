import axios, { AxiosResponse } from "axios";
import { baseUrl, initialData, IRequestData} from './requestDataCommons';

const getRequestStatus = async (id: string): Promise<IRequestData> => {
    if(!id) {
        return initialData;
    }
    try {
        const { data = initialData }: AxiosResponse<IRequestData> = await axios.get(`${baseUrl}/crawl/${id}`);

        return data;
    } catch (error) {
        console.error("trtamento de erro aqui", error);
        return {
            ...initialData,
            error: "Erro ao buscar solicitação."
        };
    }
}

export default getRequestStatus;