import { NextPage } from "next";
import Head from 'next/head';
import About from '../components/About';
import ContactMe from "../components/ContactMe";
import Header from '../components/Header';
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] pr-3 text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-thumb-yellow-600/50 scrollbar-rounded scrollbar-track-[rgb(36, 36, 36)] hover:scrollbar-thumb-yellow-900/50">
      <Head>
        <title>Portifolio</title>
        <link rel="shortcut icon" href="../public/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}

export default Home
