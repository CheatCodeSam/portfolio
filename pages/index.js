import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Carson Weeks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Under Contruction" />
        <p className="description">
          Under Construction... 
        </p>
      </main>

      <Footer />
    </div>
  )
}
