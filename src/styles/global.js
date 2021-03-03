import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        min-height: 100%;
    }
    body{
        background: #E5E5E5;
        -webkit-font-smoothing: antialiased !important;
    }
 
    body, input, button {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    :root{
        --primary: #212121;
        --secondary: #424242;
        --background: #E5E5E5;
    }
`;

export default GlobalStyle;