import Head from 'next/head'
// import Image from 'next/image'
import Layout, { siteTitle, name } from '../components/Layout'
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';




export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />

    </Layout>
  )
}
