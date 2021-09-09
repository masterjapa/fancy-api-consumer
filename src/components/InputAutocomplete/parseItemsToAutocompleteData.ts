export interface IAutoCompleteItem {
    id: string,
    value: string
  }

const parseItemsToAutocompleteData = (items: string[]): IAutoCompleteItem[] => {
    return items.map((item) => {
        const id = item.replace(/-.*/g, '');
        const value = item.replace(`${id}-`, '');

        return {
            id,
            value
        }
    });
}

export default parseItemsToAutocompleteData;