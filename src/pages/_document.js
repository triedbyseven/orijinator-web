import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

 class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }

   render() {
     return (
       <Html>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-navbutton-color" content="#000000" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
            <title>Orijinator™ | Origin is everything</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="preload"
              href="/fonts/montserrat/Montserrat-Black.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/montserrat/Montserrat-Black.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
}

export default MyDocument;