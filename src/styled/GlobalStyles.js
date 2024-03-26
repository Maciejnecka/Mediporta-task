import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --background-color-main: #e8e8e9; 

   --font-color-main: #192533;
}

body{
   background-color: var(--background-color-main);
   color: var(--font-color-main);
}

`;

export default GlobalStyles;
