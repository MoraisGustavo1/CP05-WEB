import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

`
export default GlobalStyled;