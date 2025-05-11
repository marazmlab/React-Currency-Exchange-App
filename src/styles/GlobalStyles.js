import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    @media (max-width: 768px) {
    body {
      font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        body {
        font-size: 12px;
        }
    }
`;

export default GlobalStyles;