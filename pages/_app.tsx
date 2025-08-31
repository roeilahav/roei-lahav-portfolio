import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Roei Lahav - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Available for hire in Tel Aviv, Israel." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, TypeScript, JavaScript, Web Developer, Tel Aviv" />
        <meta name="author" content="Roei Lahav" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Roei Lahav - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roei-lahav.vercel.app" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roei Lahav - Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App