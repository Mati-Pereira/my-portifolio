import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero(): JSX.Element {
  const [text, _] = useTypewriter({
    words: [
      "Olá, meu nome é Matheus",
      "Sou um Front-end Developer",
      "Curiosidade: 'Eu amo cachorros!'",
      "Café é a melhor bebida",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 overflow-y-hidden text-center">
      <BackgroundCircles />
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://github.com/Mati-Pereira.png"
        alt="profile-picture"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Front-end Web Developer
        </h2>
        <div className="flex justify-center items-center h-[200px]">
          <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor=" #5E8874" />
          </h1>
        </div>
        <div className="pt-5 pb-10">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
