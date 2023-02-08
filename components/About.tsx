import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col items-center max-w-6xl min-h-screen px-10 mx-auto text-center lg:flex-row md:relative md:text-left justify-evenly"
    >
      <h3 className="lg:absolute lg:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        src="https://github.com/Mati-Pereira.png"
        className="md:my-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl xl:w-[300px] xl:h-[400px] "
        alt="My github picture"
      />
      <div className="px-5 space-y-10 text-justify md:px-10 lg:px-28">
        <h4 className="text-4xl font-semibold underline lg:mb-14 decoration-yellow-700 ">
          Minha História
        </h4>
        <p className="text-md justify sm:text-base ">
          Olá, como vai? Meu nome é Matheus Rodrigues Pereira e agradeço por
          dedicar seu tempo para olhar este portfólio. Tenho 25 anos e
          atualmente estou desempregado. Sou formado em Engenharia Elétrica pela
          Universidade Vale do Rio Doce, no ano de 2019.
        </p>
        <p className="text-md justify sm:text-base ">
          Programação sempre foi uma paixão minha, desde a faculdade, sempre
          pensei em conectar meus conhecimentos com novas tecnologias, foi e é
          algo muito instintivo para mim. Dedico-me de corpo e alma para
          realizar o meu sonho de ser um{" "}
          <span className="font-bold underline decoration-yellow-700">
            Front-end Web Developer.
          </span>
        </p>
      </div>
    </motion.div>
  );
}
