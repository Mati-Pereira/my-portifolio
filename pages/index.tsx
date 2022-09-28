import { NextPage } from "next"
import Head from 'next/head';
import Header from '../components/Header';
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0">
      <Head>
        <title>Protifolio of Matheus</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
