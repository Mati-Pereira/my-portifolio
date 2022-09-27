import { NextPage } from "next"
import Head from 'next/head';
import Header from '../components/Header';
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y span-mandatory">
      <Head>
        <title>Protifolio of Matheus</title>
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
