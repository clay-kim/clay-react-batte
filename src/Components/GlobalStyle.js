import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *,*::before, *::after {
        margin: 0;
        padding: 0;
        font-family: 'Abel', sans-serif;
    }

    body {
        font-family: monospace;
        overflow: hidden;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Abel', sans-serif;
        margin: 0;
        padding: 0;
    }
    a{
        color:inherits;
        text-decoration: none;
    }
`
export default GlobalStyles;