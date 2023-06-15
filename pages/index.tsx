import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] pr-3 text-white min-h-screen overflow-y-hidden z-0 scrollbar-thin scrollbar-thumb-yellow-600/50 scrollbar-rounded scrollbar-track-[rgb(36, 36, 36)] hover:scrollbar-thumb-yellow-900/50">
      <Head>
        <title>Portifolio</title>
        <link
          rel="shortcut icon"
          href="../public/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <ContactMe />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "pt", ["common"])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
