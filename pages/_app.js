import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://buaai0nj4ttx.usemoralis.com:2053/server'
      appId='0GJxnyxLAUzUpVBOtquzyPaZHLaAQxUFw8rmaLyr'
    >
      <TinderProvider>
      <Head>
        <title>TAGGA </title>
        <meta name="description" content="TAGGA HO IS A BLOCKCHAIN BASED TINDER CLONE" />
        <link rel="icon" href="/logo.png" />
      </Head>

        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp