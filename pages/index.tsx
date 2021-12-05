import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Background from '../components/Background'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Live from '../components/Live'
import Videos from '../components/Videos'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Koen van der Linden is a Dutch jazz musician."
          key="description"
        />
      </Head>
      <Background />
      <Header />
      <Hero />
      <Videos />
      <About />
      <Live />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
