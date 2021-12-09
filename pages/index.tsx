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
        <title>Koen van der Linden</title>
        <meta
          name="description"
          content="Koen van der Linden is a jazz musician and composer based in the Netherlands, playing the piano, trumpet and singing. "
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
