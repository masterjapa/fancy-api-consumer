import styled from 'styled-components';
import { useLocalStorage } from './hooks/useLocalStorage';
import CreateRequest from './layouts/CreateRequest';
import SearchRequest from './layouts/SearchRequest';

const StyledApp = styled.div`
  max-width: ${({ theme }) => theme.desktopBreakView};
  margin: 0 auto;
`

function App() {

  const { saveItem, dataFromLocalStorage } = useLocalStorage('keywords');

  return (
    <StyledApp>
      <CreateRequest saveItemToLocalStorage={saveItem} />
      <SearchRequest dataFromLocalStorage={dataFromLocalStorage} />
    </StyledApp>
  );
}

export default App;
