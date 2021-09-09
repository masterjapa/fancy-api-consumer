import { useEffect, useState } from "react";
import { retrieveItemsFromLocalStorage, saveItemToLocalStorage, StoreNames } from "../helpers/localStorageHandlers";

export const useLocalStorage = (storeName: StoreNames) => {
    const [dataFromLocalStorage, setDataFromLocalStorage] = useState<string[]>(retrieveItemsFromLocalStorage(storeName));

    const saveItem = (id: string, keyword: string) => {

        const newItem = `${id}-${keyword}`;

        setDataFromLocalStorage((current) => [...current, newItem]);

        saveItemToLocalStorage('keywords', newItem);
    }

    useEffect(() => {
        setDataFromLocalStorage(retrieveItemsFromLocalStorage(storeName))
    }, [storeName])

    return { dataFromLocalStorage, saveItem }
}