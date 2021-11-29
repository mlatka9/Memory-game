import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
    margin: 0;
    font-family: 'Atkinson Hyperlegible', sans-serif;
}

*,*::before,*::after {
    
    box-sizing: border-box;
}

a, button {
    font-family: inherit;
}
`;

export default GlobalStyle;
