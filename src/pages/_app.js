import '../../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Black';
    font-weight: 900;
    font-display: fallback;
    font-style: normal;
    src:  url('/fonts/montserrat/Montserrat-Black.woff2') format('woff2'),
          url('/fonts/montserrat/Montserrat-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat-Thin';
    font-weight: 100;
    font-display: fallback;
    font-style: normal;
    src:  url('/fonts/montserrat/Montserrat-Thin.woff2') format('woff2'),
          url('/fonts/montserrat/Montserrat-Thin.woff') format('woff');
  }

  html, body {
    background-color: #000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'red'
  },
};

const variants = {
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  }
};

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={variants}>
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  )
}