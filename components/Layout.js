import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'



export const name = 'Michael Broome'
export const siteTitle = 'M. Broome'

export default function Layout({ children, home, name }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="michael broome web developer portfolio"
        />
      </Head>
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </>
  )
}
