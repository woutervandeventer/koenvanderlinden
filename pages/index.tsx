import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import About from '../components/About'
import Background from '../components/Background'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Live from '../components/Live'
import Videos from '../components/Videos'

const Home: NextPage = () => {
  useEffect(() => {
    const viewport = document.head
      .getElementsByTagName('meta')
      .namedItem('viewport')

    viewport?.setAttribute(
      'content',
      `${viewport.content}, height=${window.innerHeight}`
    )
  })
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Koen van der Linden is a Dutch jazz musician."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
