import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/Layout';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Work from '../components/Work';




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
      <Work />
      <Projects />

    </Layout>
  )
}
