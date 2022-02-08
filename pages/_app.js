import Head from 'next/head'
// import './styles/styles.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="../static/images/logo/favicon.png" type="image/png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/arta.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/languages/rust.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp