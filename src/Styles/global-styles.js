import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

    }



`;
export default GlobalStyle;
