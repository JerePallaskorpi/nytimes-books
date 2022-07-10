import { createGlobalStyle } from 'styled-components';

// Colors
export const colorMain = '#237e32';
export const colorFontDark = '#212121';
export const colorBackgroundLight = '#f2f2f2';

// Shadows
export const shadowDefault = '0 2px 2px 0 hsla(0, 0%, 0%, 0.2)';

// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 1rem;
    margin: 0 auto;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorBackgroundLight};
    font-weight: 400;
    color: ${colorFontDark};

    input, select, textarea, button {
        font-family: inherit;
    }

    *::-moz-selection { 
      background: ${colorMain}; 
      color: white;
    }
    *::selection { 
      background: ${colorMain};
      color: white;
    }
  }
`;
