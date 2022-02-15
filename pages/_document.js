import Document, {Html, Head, Main, NextScript} from 'next/document';
import {React} from 'react';
import {ServerStyleSheets} from '@mui/styles';
import {Footer} from '../components';

/**
 * Document class
 * @return {any} Document
*/
export default class MyDocument extends Document {
  /**
     * Document class
     * @param {any} ctx -
     * @return {any} Document
    */
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    // try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>),
      enhanceComponent: (Component) => Component,
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>
      ),
    };
    // }
    // finally {
    //   ctx.renderPage(sheets);
    // }
  }


  /**
 * Document class
 * @return {any} Document
 */
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="../static/images/logo/favicon.png"
          />
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        <Footer>

        </Footer>
      </Html>
    );
  }
}

