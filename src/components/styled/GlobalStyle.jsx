import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        font-family:"quicksand";
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body{
        background-color:#051923;
    }
    ::-webkit-scrollbar {
    display: none;
}
`;
export default GlobalStyle;
