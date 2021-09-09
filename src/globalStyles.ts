import { createGlobalStyle } from "styled-components";
import { mobileStyles } from "./components/styles";
import { ITheme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
html {
  font-family: ${({ theme }) => theme.primaryFontFamily};
  font-size: 100%;

  h1, h2 {
    color: ${({ theme }) => theme.primaryDark}
  }

  h1 {
    font-size: 2rem;
    margin: 2rem 0;

    ${mobileStyles(`
        font-size: 1.5rem;
        margin: 1.5rem 0;
    `)}
    }

h2 { 
    font-size: 1.5rem;
    margin: 1.5rem 0;

    ${mobileStyles(`
        font-size: 1rem;
        margin: 1rem 0;
    `)}
    }
}
body {
  background: ${({ theme }) => theme.primaryLight};
}
`;

export { GlobalStyle };
