import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout.js'
import Script from 'next/script'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        </Head>
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)}
      >
      </Script> */}
        <h1>First post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>

  )
}
