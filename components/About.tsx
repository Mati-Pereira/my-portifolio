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
      className="relative flex flex-col items-center h-screen max-w-6xl px-10 mx-auto text-center md:text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl xl:w-[300px] xl:h-[400px] mt-24"
      />
      <div className="px-0 space-y-5 md:px-10 lg:px-28">
        <h4 className="text-4xl font-semibold lg:mb-14">
          Aqui está um pouco da minha história
          <span className="underline decoration-yellow-700 ">
            Minha História
          </span>
        </h4>
        <p className="text-xs text-justify sm:text-base ">
          Olá, como vai? Meu nome é Matheus Rodrigues Pereira e agradeço por
          dedicar seu tempo para olhar este portfólio. Tenho 25 anos e
          atualmente estou desempregado. Sou formado em Engenharia Elétrica pela
          Universidade Vale do Rio Doce, no ano de 2019.
        </p>
        <p className="text-xs text-justify sm:text-base ">
          Programação sempre foi uma paixão minha, desde a faculdade, sempre
          pensei em conectar meus conhecimentos com novas tecnologias, foi e é
          algo muito instintivo para mim. Dedico-me de corpo e alma para
          realizar o meu sonho de ser um
          <span className="font-bold underline decoration-yellow-700">
            Front-end Web Developer.
          </span>
        </p>
      </div>
    </motion.div>
  );
}
