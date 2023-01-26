import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero(): JSX.Element {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Matheus",
      "I'm a Front-end Developer",
      "Nice to meet you",
      "Fun Fact: 'I Love Dogs!'",
      "Coffee is the best",
      "#neverstoplearning",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-y-hidden text-center">
      <BackgroundCircles />
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://github.com/Mati-Pereira.png"
        alt="profile-picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Front-end Web Developer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor=" #5E8874" />
        </h1>
        <div className="pt-5">
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
