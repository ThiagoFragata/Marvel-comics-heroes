import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root{
    --background: #FFFAFA;
    --red: #E52e54;
    --green: #33CC95;
    --black: #111111;
    --gray: #E5E5E5;
    --white: #ffffff;
    }
    
    ::-webkit-scrollbar {
        width: .5rem;
    }
    ::-webkit-scrollbar-track {
        background: var(--gray);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--red);
        border-radius: .25rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1024px) {
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Marvel", sans-serif;
        font-weight: 400;
    }

    ul, li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
