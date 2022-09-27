import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

export default function Hero(): JSX.Element {
  const [text, count] = useTypewriter({
    words:
      [
        "Hi, My Name is Matheus",
        "I'm a React Developer",
        "Nice to meet you",
        "I Love Dogs"
      ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-y-hidden">
      <BackgroundCircles />
      <img className="rounded-full h-32 w-32 mx-auto" src="https://github.com/Mati-Pereira.png" alt="profile-picture" />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">Fullstack Web Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor=" #5E8874" />
        </h1>
      </div>
    </div>
  )
}

