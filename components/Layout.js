import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'



export const name = 'Michael Broome'
export const siteTitle = 'M. Broome'

export default function Layout({ children, home, name }) {
  return (
    <>
      <Head>
      </Head>
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </>
  )
}
