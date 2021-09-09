
// aqui na verdade poderia ser o id do user logado
export type StoreNames = 'keywords';

const retrieveItemsFromLocalStorage = (storeName: StoreNames): string[] => {

    const rawStorage = 
        (localStorage.getItem(storeName) || '');

    if(!rawStorage) {
        return []
    }

    return rawStorage.split(',');
}

const saveItemToLocalStorage = (storeName: StoreNames, id: string): void => {
    if(!window) {
        return;
    }

    const itemsToStore = [id, ...retrieveItemsFromLocalStorage(storeName)]

    const newStorage = [...new Set(itemsToStore)].toString();

    localStorage.setItem(storeName, newStorage)
}

export {
    retrieveItemsFromLocalStorage,
    saveItemToLocalStorage,
}