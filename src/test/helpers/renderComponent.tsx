import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const renderComponent = (component: React.ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );

  export default renderComponent;