import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        /* === STEEL Dark Luxury Palette === */
        --bg-dark:       #0a0a0a;
        --bg-surface:    #111111;
        --bg-card:       #161616;
        --bg-elevated:   #1e1c19;

        --gold:          #c9a84c;
        --gold-bright:   #e8c96a;
        --gold-dim:      rgba(201, 168, 76, 0.45);
        --gold-border:   rgba(201, 168, 76, 0.22);

        --text:          #f0ede8;
        --text-dim:      #8a8070;
        --text-muted:    #4a4540;

        --border:        rgba(255,255,255,0.07);
        --shadow-gold:   0 8px 40px rgba(201, 168, 76, 0.12);
        --shadow-dark:   0 20px 60px rgba(0, 0, 0, 0.6);

        /* Legacy aliases */
        --hero-bg-start: #1a1510;
        --hero-bg-end:   #0a0a0a;
        --primary-btn:   #c9a84c;
        --text-light:    #f0ede8;
        --card-bg-start: rgba(201,168,76,0.08);
        --card-bg-end:   #161616;
        --badge-bg:      rgba(201, 168, 76, 0.12);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--bg-dark);
        color: var(--text);
        font-family: 'Jost', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 300;
        line-height: 1.6;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--text);
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        letter-spacing: 0.08em;
        transition: color 0.25s ease;
    }

    a:hover {
        color: var(--gold);
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 400;
        line-height: 1.1;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button {
        cursor: pointer;
        font-family: 'Jost', sans-serif;
        letter-spacing: 0.1em;
    }

    ::selection {
        background: var(--gold-dim);
        color: var(--text);
    }
`;

export default GlobalStyle;