
type KeywordStatus = 'active' | 'done';

export interface IRequestData {
    id?: string,
    status?: KeywordStatus | number,
    urls?: string[],
    error?: string,
}

const baseUrl: string = process.env.REACT_APP_API_ENTRY as unknown as string;

const initialData: IRequestData = {
    id: '',
}

export {
    baseUrl,
    initialData,
}